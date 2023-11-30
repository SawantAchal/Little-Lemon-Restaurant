import React, { useState } from 'react'

const BookingForm = (props) => {
    const [occasion , setOccasion] = useState("")
    const [guest , setGuest] = useState("")
    const [date , setDate] = useState("")
    const [times , setTimes] = useState("")

    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submitForm(e)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <fieldset>
        <label htmlFor='res-date'>Choose Date :</label>
        <input type='date' id='res-date' value={date} onChange={(e) => handleChange(e.target.value)} required />
        <label htmlFor='res-time'>Choose Time</label>
        <select id='res-time' value={times} onChange={(e) => setTimes(e.target.value)} required>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
        <label htmlFor='guests'>Number of Guest</label>
        <input id='guests' type='number' value={guest} onChange={(e) => setGuest(e.target.value)} placeholder='1'min="1" max="10" />
        <label htmlFor='occasion'>Occasion</label>
        <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
        <input type='submit'aria-label='On Click' value="make your reservation "/>
        </fieldset>
    </form>
    </>
  )
}

export default BookingForm