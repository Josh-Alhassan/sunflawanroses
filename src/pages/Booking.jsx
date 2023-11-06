import React from "react";
import './Booking.css';

import Footer from './Footer';

function Booking() {
  return (
    <div className="book-section">
      <div className="section">
        <div className="booking__pagination">
          <p className="pagination">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M16.5003 7.50028H5.11533L10.0653 2.56528C10.3478 2.28282 10.5065 1.89973 10.5065 1.50028C10.5065 1.10083 10.3478 0.717734 10.0653 0.435278C9.78288 0.152823 9.39979 -0.00585937 9.00033 -0.00585938C8.60088 -0.00585937 8.21779 0.152823 7.93533 0.435278L0.435333 7.93528C0.298772 8.07793 0.191724 8.24615 0.120333 8.43028C-0.0296943 8.79547 -0.0296943 9.20509 0.120333 9.57028C0.191724 9.75441 0.298772 9.92262 0.435333 10.0653L7.93533 17.5653C8.07478 17.7059 8.24068 17.8175 8.42347 17.8936C8.60626 17.9698 8.80232 18.009 9.00033 18.009C9.19835 18.009 9.39441 17.9698 9.5772 17.8936C9.75999 17.8175 9.92589 17.7059 10.0653 17.5653C10.2059 17.4258 10.3175 17.2599 10.3937 17.0771C10.4698 16.8944 10.509 16.6983 10.509 16.5003C10.509 16.3023 10.4698 16.1062 10.3937 15.9234C10.3175 15.7406 10.2059 15.5747 10.0653 15.4353L5.11533 10.5003H16.5003C16.8982 10.5003 17.2797 10.3422 17.561 10.0609C17.8423 9.77963 18.0003 9.3981 18.0003 9.00028C18.0003 8.60245 17.8423 8.22092 17.561 7.93962C17.2797 7.65831 16.8982 7.50028 16.5003 7.50028Z"
                fill="#E5E7EB"
              />
            </svg>
          </p>
          <p className="book-session__caption">Book a Session</p>
        </div>
        
        {/* Booking Title */}
        <div className="booking__heading-titles">
          <h2 className="booking__title">Welcome to Sunflawanroses</h2>
          <h3 className="booking__sub-title">Please fill the form below to book a session</h3>
        </div>

        {/* FORM DIV CONTAINER */}
        <div className="form__container">

          <form action="" className="booking__form">

            {/* NAME */}
            <div className="name__label input__label">
              <label htmlFor="name label__title">Name</label>
              <input type="text" className="booking__input-field" placeholder="Personal, Business, Event name etc..." />
            </div>

            {/* EMAIL */}
            <div className="email__label input__label">
              <label htmlFor="email label__title">Email</label>
              <input type="email" className="booking__input-field" placeholder="name@example.com" />
            </div>

            {/* PHONE NUMBER */}
            <div className="phone__label input__label">
              <label htmlFor="phoneNumber label__title">Phone Number</label>
              <input type="text" className="booking__input-field" placeholder="+234 81223466789" />
            </div>

            {/* EVENT TYPE */}
            <div className="event-type__label input__label">
              <label htmlFor="eventType label__title">Event Type</label>
              <input type="text" className="booking__input-field" placeholder="Hangout, Wedding, Graduation etc..." />
            </div>

            {/* EVENT ADDRESS */}
            <div className="eventAddress__label input__label">
              <label htmlFor="eventAddress label__title">Event Address</label>
              <input type="text" className="booking__input-field" placeholder="74th str, milky way, neptune, Galaxy X." />
            </div>

            {/* EVENT Date */}
            <div className="eventDate__label input__label">
              <label htmlFor="eventDate label__title">Event Date</label>
              <input type="date" className="booking__input-field" placeholder="Event Date" />
            </div>

            {/* CHECKBOX */}
            <div className="checkbox">
              <div className="checkbox-wrap">
                <input type="checkbox" name="photography" id="photography" />
                <label htmlFor="photography">Photography</label>
              </div>

              <div className="checkbox-wrap">
                <input type="checkbox" name="videography" id="videography" />
                <label htmlFor="videography">Videography</label>
              </div>
            </div>

            <submit type="submit" className="book__btn">Send</submit>
          </form>
        </div>
        
      <Footer />
      </div>

    </div>
  );
}

export default Booking;
