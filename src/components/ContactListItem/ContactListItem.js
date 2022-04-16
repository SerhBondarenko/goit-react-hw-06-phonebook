import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, } from 'react-redux';
import { deleteContact} from '../../redux/contactSlice'

  const ContactListItem = ({ name, id, number }) => {
    const dispatch = useDispatch();
    return (
      <li key={id}>
        {name}: {number}{' '}
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
    ); 
  };

export default ContactListItem;

 ContactListItem.propTypes = {
   name: PropTypes.string,
   number: PropTypes.string,
  
 };