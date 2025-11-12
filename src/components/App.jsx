import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  // // оновлення name при введенні

  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };
  // // новий контакт
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const { name, number, contacts } = this.state;
  //   // пропуск пустих імен:
  //   if (name.trim() === '') return;
  //   const newContact = {
  //     id: nanoid(),
  //     name: name.trim(),
  //     number: number.trim(),
  //   };
  //   this.setState({
  //     contacts: [...contacts, newContact],
  //     name: '',
  //     number: '',//очистимо інпут
  //   });
  // };
  // оновлення фільтру
  handleFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  // фільтр без регістру
  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilterContacts();
    return (
      <div style={{ margin: '20px' }}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  }
}
