import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  // оновлення name при введенні

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  // новий контакт
  handleSubmit = event => {
    event.preventDefault();
    const { name, number, contacts } = this.state;
    // пропуск пустих імен:
    if (name.trim() === '') return;
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',//очистимо інпут
    });
  };
  render() {
    const { contacts, name, number } = this.state;
    return (
      <div style={{ margin: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
