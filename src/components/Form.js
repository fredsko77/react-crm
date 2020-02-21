import React, { Component } from 'react';
import firebase from '../firebase'

class From extends Component {

    updateData () {
        this.props.updateData();
    }
    
    addContact = (e) => {
        e.preventDefault()
        
        console.warn(this.newContact);

        let newContact = {
            prenom: e.target.prenom.value,
            nom: e.target.nom.value,
            email: e.target.email.value,
            compagnie: e.target.compagnie.value,
            notes: e.target.notes.value,
        }
        
        const db = firebase.firestore();
        const settings = { timestampsInSnapshots: true } 
        db.settings(settings);

        db.collection("contacts").add(newContact);

        //Reset du formulaire ajout contact
        document.getElementById("addContact").reset();

        this.updateData();

    }
    
    render() { 
        return ( 
            <div className="row">
                <form className="col s12" id="addContact" onSubmit={this.addContact.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="prenom" type="text" className="validate"  ref={input => this.newContact = input} />
                            <label htmlFor="prenom">Prénom</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nom" type="text" className="validate"  ref={input => this.newContact = input} />
                            <label htmlFor="nom">Nom de famille</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="email" type="text" className="validate"  ref={input => this.newContact = input} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="compagnie" type="text" className="validate"  ref={input => this.newContact = input} />
                            <label htmlFor="compagnie">Compagnie</label>
                        </div>                        
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="notes" type="text" className="validate"  ref={input => this.newContact = input} />
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <div className="input-field col s4">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Ajouter</button>
                        </div>                        
                    </div>
                </form>
            </div>
         );
    }
}
 
export default From;