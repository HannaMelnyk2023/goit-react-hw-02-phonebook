import React from "react";
export default class ContactList extends React.Component {
    render() {
        const { contacts } = this.props;
        return ( 
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
            );
        }
    }
