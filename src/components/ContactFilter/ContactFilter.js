import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice'

const ContactFilter = () =>{
  const value = useSelector(state => state.filter);
  //console.log(value)
  const dispatch = useDispatch();
  return(
  <label>
  Search by name
  <input
    type="text"
    value={value}
    onChange={(e) => {
      dispatch(changeFilter(e.target.value));
    }}
 />
</label>) 
}

export default ContactFilter;

//========================== propTypes ===================
 ContactFilter.propTypes = {
   value: PropTypes.string,
   onChange: PropTypes.func
 };