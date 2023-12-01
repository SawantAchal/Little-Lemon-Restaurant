import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/BookingForm';
import { BrowserRouter } from 'react-router-dom';

test('renders the Header heading ', () => {
  render(<BrowserRouter><App /> </BrowserRouter>);
  const headingElement = screen.getByText("Reserve table");
  expect(headingElement).toBeInTheDocument();

  const reservebutton = screen.getByRole("button")
  fireEvent.click(reservebutton)

  const headingElementNew = screen.getByText("Choose Date")
  expect(headingElementNew).toBeInTheDocument()
});

test('Initialize/Update Times', () => { 
  render (<BrowserRouter><App /> </BrowserRouter>);
  const reservebutton = screen.getByRole("button")
  fireEvent.click(reservebutton)

  const testTime = []
})
