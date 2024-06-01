import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { flightServ } from '../../services/flightServ';
import './BookTicket.scss';
import BookTicketContent from './BookTicketContent';
import BookTicketSearch from './BookTicketSearch';
import BookTicketStep from './BookTicketStep';

const BookTicket = () => {
  const [arrFlight, setArrFlight] = useState([]);
  const location = useLocation();
  const {
    ticketType,
    departureId,
    destinationId,
    dateStringOnly,
    departureDate,
    destinationDate,
    ticketClass,
    totalPassengers,
    adults,
    children,
    infants,
  } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    if (ticketType == 'one-way') {
      flightServ
        .getFlightsByDepartureArrival(
          departureId,
          destinationId,
          dateStringOnly
        )
        .then((res) => {
          setArrFlight(res.data.data);
        });
    } else if (ticketType == 'round-trip') {
      flightServ
        .getFlightsByDepartureArrival(departureId, destinationId, departureDate)
        .then((res) => {
          setArrFlight(res.data.data);
        });
    }
  }, [location.state]);

  return (
    <div className="book-ticket-content">
      <Helmet>
        <title>Flynext | Book Ticket</title>
      </Helmet>
      <div className="book-ticket-header container lg:max-w-[1280px]">
        <h1>
          Welcome to Fly<span className="text-[#dcbb87]">next</span> booking
        </h1>
      </div>
      <div className="book-ticket-content section-bg">
        <div className="container flex flex-col gap-10 pb-20 pt-10 px-8 lg:max-w-[1536px] mx-auto">
          <BookTicketSearch />
          <BookTicketStep />
          <BookTicketContent arrFlight={arrFlight} ticketType={ticketType} />
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
