import React, { useState } from 'react';
import '../Assets/BookingForm.css'

const BookingForms = (props) => {
  const [occasion, setOccasion] = useState('');
  const [guest, setGuest] = useState('');
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor='res-date'>Choose Date :</label>
          <input type='date' id='res-date' value={date} onChange={(e) => handleChange(e.target.value)}required/>

          <label htmlFor='res-time'>Choose Time</label>
          <select  id='res-time' value={times}  onChange={(e) => setTimes(e.target.value)}  required>
            <option value=''>Select a time</option>
            {props.availableTimes && props.availableTimes.availableTimes.map((availableTimes) => (  <option key={availableTimes}>{availableTimes}</option>))}
          </select>

          <label htmlFor='guests'>Number of Guests</label>
          <input  id='guests'  type='number'  value={guest}  onChange={(e) => setGuest(e.target.value)}  placeholder='1'  min='1'  max='10'  required/>

          <label htmlFor='occasion'>Occasion</label>
          <select  id='occasion'  value={occasion}  onChange={(e) => setOccasion(e.target.value)}  required>
            <option value=''>Select an Option</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type='submit' aria-label='On Click' value='Make your reservation' />
        </fieldset>
      </form>
    </>
  );
};

export default BookingForms;

