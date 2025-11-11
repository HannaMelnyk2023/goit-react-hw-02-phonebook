import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";

export default class App extends Component {
  state = {
  contacts: [],
  name: ''
  }
  // оновлення name при введенні

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  // новий контакт
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, contacts } = this.state;
    
}

  }
}