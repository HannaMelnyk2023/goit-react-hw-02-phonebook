import React from 'react';

export default class ContactForm extends React.Component {
  render() {
    const { name, number, onChange, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </label>
        <label>
          Tel:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={onChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
