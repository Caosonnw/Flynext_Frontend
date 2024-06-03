import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { flightServ } from '../../services/flightServ';
import './BookTicket.scss';
import BookTicketContent from './BookTicketContent';
import BookTicketSearch from './BookTicketSearch';
import BookTicketStep from './BookTicketStep';

const BookTicket = () => {
  const [arrFlight, setArrFlight] = useState([]);
  const [bookTkTotalPassengers, setbookTkTotalPassengers] = useState(0);
  const [bookTkAdults, setbookTkAdults] = useState(0);
  const [bookTkChildren, setbookTkChildren] = useState(0);
  const [bookTkInfants, setbookTkInfants] = useState(0);
  const location = useLocation();
  const {
    ticketType,
    airportDeparture,
    airportDestination,
    departureId,
    destinationId,
    dateStringOnly,
    departureDate,
    destinationDate,
    ticketClass,
    ticketClassLabel,
    totalPassengers,
    adults,
    children,
    infants,
  } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
    setbookTkTotalPassengers(totalPassengers);
    setbookTkAdults(adults);
    setbookTkChildren(children);
    setbookTkInfants(infants);
    if (ticketType === 'one-way') {
      flightServ
        .getFlightsByDepartureArrival(
          departureId,
          destinationId,
          dateStringOnly
        )
        .then((res) => {
          setArrFlight(res.data.data);
        });
    } else if (ticketType === 'round-trip') {
      flightServ
        .getFlightsByDepartureArrival(departureId, destinationId, departureDate)
        .then((res) => {
          setArrFlight(res.data.data);
        });
    }
  }, [location.state]);

  const navigate = useNavigate();

  const handleSearchDataChange = (newState) => {
    navigate('/book-ticket', { state: newState });
  };
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
          <BookTicketSearch
            arrFlight={arrFlight}
            airportDeparture={airportDeparture}
            airportDestination={airportDestination}
            departureIdBtK={departureId}
            destinationIdBtK={destinationId}
            ticketTypeBtK={ticketType}
            ticketClassBtK={ticketClassLabel}
            totalPassengersBtK={bookTkTotalPassengers}
            bookTkAdults={bookTkAdults}
            bookTkChildren={bookTkChildren}
            bookTkInfants={bookTkInfants}
            onSearchDataChange={handleSearchDataChange}
          />
          <BookTicketStep />
          <BookTicketContent
            arrFlight={arrFlight}
            ticketClassLabel={ticketClassLabel}
            ticketClass={ticketClass}
          />
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
