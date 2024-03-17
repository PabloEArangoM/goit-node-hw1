const fs = require('fs');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

function listContacts() {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    console.table(contacts);
  });
}

function getContactById(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const contact = contacts.find(contact => contact.id === contactId);
    if (contact) {
      console.table([contact]);
    } else {
      console.log('Contact not found');
    }
  });
}

function removeContact(contactId) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let contacts = JSON.parse(data);
    contacts = contacts.filter(contact => contact.id !== contactId);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Contact removed successfully');
    });
  });
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const contacts = JSON.parse(data);
    const newContact = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone
    };
    contacts.push(newContact);
    fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Contact added successfully');
    });
  });
}

module.exports = { listContacts, getContactById, removeContact, addContact };
