import React from 'react';
import { Container } from './App.styled.jsx';
import { Section } from 'components/Section/index.js';
import ContactForm from 'components/ContactForm/index.js';
import { ContactList } from 'components/ContactList/index.js';
import { Filter } from 'components/Filter/index.js';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = contact => {
    const { contacts } = this.state;
    const existingContact = contacts.find(cont => cont.name === contact.name);

    if (existingContact) {
      alert(`Contact with name "${contact.name}" already exists!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Filter
            title="Find contact by name"
            onChange={this.handleFilterChange}
            value={this.state.filter}
          />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.handleDeleteContact}
          />
        </Section>
      </Container>
    );
  }
}
