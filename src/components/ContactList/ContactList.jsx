import React from "react";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>

        {contacts.map(({ id, name, number }) =>
        (
            <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteContact = {onDeleteContact}

            />
        ))}

    
    </ul>
);

export default ContactList;