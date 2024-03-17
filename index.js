const { listContacts, getContactById, removeContact, addContact } = require('./contacts');
const argv = require("yargs")
  .option('action', {
    alias: 'a',
    describe: 'Action to perform',
    choices: ['list', 'get', 'add', 'remove'],
    demandOption: true
  })
  .help()
  .argv;

const { action, id, name, email, phone } = argv;

switch (action) {
  case 'list':
    listContacts();
    break;
  case 'get':
    getContactById(id);
    break;
  case 'add':
    addContact(name, email, phone);
    break;
  case 'remove':
    removeContact(id);
    break;
  default:
    console.error('Invalid action');
}
