import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  // оновлення name при введенні

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  // новий контакт
  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts } = this.state;
    // пропуск пустих імен:
    if (name.trim() === '') return;
    const newContact = {
      id: nanoid(),
      name: name,
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '', //очистимо інпут
    });
  };
  render() {
    const { contacts, name } = this.state;
    return (
      <div style={{ margin: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm
          name={name}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
