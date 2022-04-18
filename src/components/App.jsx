import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm'
import ContactFilter from './ContactFilter/ContactFilter'



function App() {
   return (
       <section>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <ContactFilter />
      <ContactList/>
        </section>
    )
};
    
export default App;
  

