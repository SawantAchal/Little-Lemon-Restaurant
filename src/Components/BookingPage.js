import React from 'react'
import BookingForm from '../Components/BookingForm'

const BookingPage = (props) => {
  return (
    <>
    <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm}/>
    </>
  )
}

export default BookingPage

