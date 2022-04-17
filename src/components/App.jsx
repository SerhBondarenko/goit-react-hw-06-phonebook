//import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addContact} from '../redux/contactSlice'
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm'
import ContactFilter from './ContactFilter/ContactFilter'

const shortid = require('shortid');


function App() {
  const filters = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contact);

  const dispatch = useDispatch();

  const onSaveContactClicked = (data) => {
  const message = `${data.name} is alredy in contacts`;
  const findName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
  const findNumber = contacts.find(contact => contact.number === data.number);

  if (findName || findNumber !== undefined) {
    alert(message);
    return
  };
  
  if (contacts) {
    dispatch(
      addContact({
          id: shortid.generate(),
          name: data.name,
          number: data.number
      }))
     
  }
}

const normalizeFilter = filters.toLowerCase();
const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
 // console.log(filterContacts)
   return (
       <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSaveContactClicked} />
        <h2>Contacts</h2>
        <ContactFilter />
      <ContactList
        contacts={  filterContacts }
        />
        </section>
    )
};
    
export default App;
  



  //==================================
  /*useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactFrom))
  }, [contactFrom])

//==================================
  useEffect(() => {
    console.log('start useEffect');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
     if (parsedContacts) {
  setContacts(parsedContacts);};
  }, [setContacts])
*/