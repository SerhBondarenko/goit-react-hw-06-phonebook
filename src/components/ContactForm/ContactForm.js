import { useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from 'react-redux';
import { addContact} from '../../redux/contactSlice'
const shortid = require("shortid");


 function  ContactForm(){ 
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

  
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

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const handleChangeName = (e) => {
   setName(e.currentTarget.value);
   };
   
  const handleChangeNumber = (e) => {
      setNumber(e.currentTarget.value);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveContactClicked ({name, number});
    reset();
  };

   const reset = () => {
     setName('');
     setNumber(''); 
  };

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            placeholder="Enter name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor={numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            onChange={handleChangeNumber}
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="submitBtn">
          Add contact
        </button>
      </form>
    );
};

export default ContactForm;

  //========================== propTypes ===================
 /* ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };*/