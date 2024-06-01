import { Checkbox } from 'antd';
import moment from 'moment';
import React from 'react';
import NotFoundFlight from '../../components/Animation/NotFoundFlight';

const BookTicketContent = ({ arrFlight }) => {
  // console.log(arrFlight);
  const airlines = {
    VN: { src: '/img/VN.png', name: 'Vietnam Airlines' },
    VJ: { src: '/img/VJ.png', name: 'VietJet Air' },
    QH: { src: '/img/QH.png', name: 'Bamboo Airways' },
    VU: { src: '/img/VU.png', name: 'Vietravel Airlines' },
    BL: { src: '/img/BL.png', name: 'Pacific Airlines' },
  };
  const getAirlineInfo = (flightNumber) => {
    const airlineCode = flightNumber.substring(0, 2);
    return airlines[airlineCode];
  };

  return (
    <div className="book-ticket-flight flex gap-14">
      <div className="book-ticket-filter">
        <div className="filter-side-bar flex flex-col">
          <div className="filter-side-bar-header">
            <div className="filter-side-bar-title flex-grow">
              Filter results
            </div>
          </div>
          <div className="filter-side-bar-main">
            <div className="filter-side-bar-item">
              <label className="text-base font-bold leading-6">Show by</label>
              <Checkbox>Vietnam Airlines</Checkbox>
              <Checkbox>VietJet Air</Checkbox>
              <Checkbox>Bamboo Airways</Checkbox>
              <Checkbox>Vietravel Airlines</Checkbox>
              <Checkbox>Pacific Airlines</Checkbox>
            </div>
          </div>
        </div>
      </div>
      <div className="book-ticket-flight-list flex flex-col gap-4">
        {arrFlight.length === 0 ? (
          <NotFoundFlight />
        ) : (
          arrFlight.map((flight, index) => (
            <div key={index}>
              {index == 0 && (
                <div className="book-ticket-flight-item-card">
                  <div className="collapse-header">
                    {index === 0 && (
                      <div className="flight-card-header flex gap-4 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={48}
                          height={48}
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M19.1667 7.76666C19.2189 7.55255 19.1891 7.32665 19.0833 7.13333C18.8133 6.6647 18.4533 6.25401 18.0241 5.92483C17.5949 5.59565 17.105 5.35445 16.5824 5.21509C16.0597 5.07572 15.5147 5.04093 14.9786 5.1127C14.4425 5.18447 13.9259 5.3614 13.4583 5.63333L11.6667 6.66666L7.49999 4.70833C7.38154 4.64696 7.25007 4.61493 7.11666 4.61493C6.98325 4.61493 6.85179 4.64696 6.73333 4.70833L4.23333 6.15C4.10978 6.22126 4.00659 6.32305 3.93363 6.44561C3.86068 6.56818 3.8204 6.70741 3.81666 6.85C3.81263 6.99364 3.8458 7.13588 3.91297 7.26292C3.98014 7.38995 4.07901 7.49746 4.2 7.575L6.95 9.30833L5.49999 10.1417L1.51666 10.625C1.35653 10.6448 1.2056 10.7107 1.08218 10.8146C0.958764 10.9185 0.868172 11.0561 0.821404 11.2105C0.774636 11.3649 0.773703 11.5296 0.818719 11.6845C0.863735 11.8395 0.952763 11.978 1.07499 12.0833L4.02499 14.6333C4.41337 15.004 4.91075 15.2398 5.44353 15.3058C5.97632 15.3719 6.51621 15.2646 6.98333 15L18.75 8.275C18.8503 8.22294 18.9389 8.15103 19.0106 8.06365C19.0822 7.97626 19.1353 7.87522 19.1667 7.76666ZM6.22499 13.6C6.06492 13.6881 5.88033 13.7211 5.69964 13.694C5.51896 13.6669 5.35218 13.5812 5.225 13.45L3.64166 12.0917L5.91666 11.8167C6.02846 11.8023 6.13619 11.7655 6.23333 11.7083L9.03333 10.1C9.15807 10.028 9.26202 9.9249 9.33505 9.80076C9.40807 9.67662 9.44768 9.53567 9.45 9.39166C9.4517 9.24864 9.41657 9.10758 9.34798 8.98206C9.27938 8.85654 9.17963 8.7508 9.05833 8.675L6.30833 6.93333L7.225 6.40833L11.3917 8.34166C11.5101 8.40303 11.6416 8.43506 11.775 8.43506C11.9084 8.43506 12.0399 8.40303 12.1583 8.34166L14.2917 7.10833C14.7288 6.86333 15.2295 6.75538 15.7288 6.79847C16.2281 6.84156 16.7029 7.03371 17.0917 7.35L6.22499 13.6Z"
                            fill="#dcbb87"
                          />
                        </svg>
                        <div className="flight-card-details flex flex-col gap-2">
                          <div className="flex gap-2 items-center">
                            <label className="text-base font-bold">
                              {
                                flight
                                  .airports_flights_departure_airport_idToairports
                                  .airport_name
                              }
                            </label>
                            <i className="fa-solid fa-arrow-right"></i>
                            <label className="text-base font-bold">
                              {
                                flight
                                  .airports_flights_arrival_airport_idToairports
                                  .airport_name
                              }
                            </label>
                          </div>
                          <p className="font-bold text-[14px]">
                            {moment(flight.departure_time).format(
                              'dddd, DD/MM/YYYY'
                            )}
                          </p>
                        </div>
                        <i className="fa-solid fa-plus ml-20 text-[#dcbb87]"></i>
                      </div>
                    )}
                  </div>
                  <div className="collapse-body">
                    <div>
                      <div>
                        {index == 0 && (
                          <div className="flight-callendar">
                            <div className="flight-callendar-item">
                              <div className="flight-callendar-day">Friday</div>
                              <div className="flight-callendar-date">31</div>
                            </div>
                            <div className="flight-callendar-item">
                              <div className="flight-callendar-day">
                                Saturday
                              </div>
                              <div className="flight-callendar-date">1</div>
                            </div>
                            <div className="flight-callendar-item flight-callendar-item-active">
                              <div className="flight-callendar-day">Sunday</div>
                              <div className="flight-callendar-date">02</div>
                            </div>
                            <div className="flight-callendar-item">
                              <div className="flight-callendar-day">Monday</div>
                              <div className="flight-callendar-date">03</div>
                            </div>
                            <div className="flight-callendar-item">
                              <div className="flight-callendar-day">
                                Tuesday
                              </div>
                              <div className="flight-callendar-date">04</div>
                            </div>
                          </div>
                        )}
                        <div className="flight-card-list flex flex-col gap-4">
                          {arrFlight.map((flight, index) => (
                            <div key={index} className="flight-card">
                              <div>
                                <div className="flight-item-card flex items-center gap-4">
                                  <div className="flight-group">
                                    <div className="flex items-center gap-4">
                                      <div className="flight-logo">
                                        <div className="flight-logo-child">
                                          <img
                                            src={
                                              getAirlineInfo(
                                                flight.flight_number
                                              ).src
                                            }
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                      <div className="flex flex-col flex-grow gap-1 text-left">
                                        <label className="text-[14px] font-bold">
                                          {flight.flight_number}
                                        </label>
                                        <p className="text-[14px] font-normal">
                                          {
                                            getAirlineInfo(flight.flight_number)
                                              .name
                                          }
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flight-group">
                                    <div className="flex items-center gap-4">
                                      <div className="flight-card-destination">
                                        <label className="text-[14px] font-bold">
                                          {moment
                                            .utc(flight.departure_time)
                                            .format('HH:mm')}
                                        </label>
                                        <p className="text-[14px] font-normal">
                                          SGN
                                        </p>
                                      </div>
                                      <div className="flight-card-destination">
                                        <label className="text-[14px] font-bold">
                                          {moment
                                            .utc(flight.arrival_time)
                                            .format('HH:mm')}
                                        </label>
                                        <p className="text-[14px] font-normal">
                                          HAN
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flght-card-price">
                                    <label className="text-[14px] font-bold">
                                      {flight.price.toLocaleString({
                                        style: 'currency',
                                        currency: 'VND',
                                      }) + ' VND'}
                                    </label>
                                    <p className="text-[14px] font-normal">
                                      VND
                                    </p>
                                  </div>
                                  <button type="button" className="btn-choose">
                                    Choose
                                  </button>
                                  <div>
                                    <i className="fa-solid fa-chevron-down text-[#475467]"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookTicketContent;
