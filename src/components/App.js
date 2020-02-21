import React, { Component } from 'react';
import firebase from '../firebase';
import './App.css';
import Grid from './Grid';
import Form from './Form';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      contacts: [] 
    };
  }

  updateData(){
    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true } 
    db.settings(settings);
    db.collection('contacts').get()
    .then((snapshot) => {
      let contacts = [];
      snapshot.forEach((doc) => {
        let contact = Object.assign({id: doc.id}, doc.data())
        contacts.push(contact)
      });
      this.setState({
        contacts: contacts
      });
    })
    .catch((error) => {
      console.warn('Erruer ! ', error )
    });
  }

  deleteData(docID){

    const db = firebase.firestore();
    const settings = { timestampsInSnapshots: true } 
    db.settings(settings);

    db.collection('contacts').doc(docID).delete();
    this.updateData()

  }

  componentWillMount() {
    this.updateData()
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav className="blue lighten-2">
            <a href="/" className="brand-logo center" ></a>
          </nav>
        </div>
        <div>
          <Form updateData={this.updateData.bind(this)} />
          <Grid items={this.state.contacts} deleteData={this.deleteData.bind(this)} />
        </div>
      </div>
    )
  } 
}

export default App;
