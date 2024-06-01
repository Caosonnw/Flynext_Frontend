import React from 'react';

const BookTicketStep = () => {
  return (
    <div className="book-ticket-step m-auto">
      <div className="step-by-step flex gap-4 items-center">
        <div className="step-by-step-item flex flex-col gap-4 items-center justify-center text-center">
          <div className="step-by-step-icon"></div>
          <div className="step-by-step-body">
            <p className="sub-headding">Select flight</p>
            <p className="sub-content">Please select a flight</p>
          </div>
        </div>
        <div className="step-by-step-item flex flex-col gap-4 items-center justify-center text-center">
          <div className="step-by-step-icon"></div>
          <div className="step-by-step-body">
            <p className="sub-headding">Reservations</p>
            <p className="sub-content">
              Fill in the information to make a reservation
            </p>
          </div>
        </div>
        <div className="step-by-step-item flex flex-col gap-4 items-center justify-center text-center">
          <div className="step-by-step-icon"></div>
          <div className="step-by-step-body">
            <p className="sub-headding">Payment</p>
            <p className="sub-content">Pay to receive air tickets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicketStep;
