import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({contacts}) => {

  console.log('contactaFrom', contacts);
  return (
    <div>
      <ul>
        {contacts.map(({id,name,number}) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
          />))}
      </ul>
    </div>
  );
};

export default ContactList;

//========================== propTypes ===================
 ContactList.propTypes = {
   contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
   
 };