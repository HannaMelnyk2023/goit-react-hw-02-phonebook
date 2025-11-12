import React from "react";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name, number }) =>
        (
            <ContactItem key={id} name={name} number={number} />
        ))}
    </ul>
);

export default ContactList;