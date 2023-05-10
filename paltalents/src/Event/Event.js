import React from "react";
import "./Event.css";
import location from "./rcs/location.svg";
import calendar from "./rcs/calendar.svg";
import phone from "./rcs/phone.svg";
import time from "./rcs/time.svg";
import { eventDetails } from "../components/data";

function Event() {
  return (
    <>
      <div className="Content">
        <div className="Header">
          <div className="Layer">Event Name</div>
        </div>
        <div className="Body">
          <ul className="Info">
            <li>
              <span>
                <img width="15" src={location} />
                {eventDetails.location}
              </span>
              <span>
                <img width="20" src={calendar} />
                {eventDetails.date}
              </span>
              <span>
                <img width="20" src={time} />
                {eventDetails.time}
              </span>
              <span>
                <img width="20" src={phone} />
                {eventDetails.phoneNumber}
              </span>
            </li>
          </ul>

          <div className="Container">
            <div className="About">
              <h4 className="Title">About Event</h4>
              <p>{eventDetails.about}</p>
              <span>
                <p>Hosted by: {eventDetails.host}</p>{" "}
                <button className="Round-Button">Visit Profile</button>{" "}
              </span>
            </div>

            <div className="Agenda">
              <h4 className="Title">Agenda</h4>
              <ul>
                {eventDetails.agenda.map((detail) => (
                  <li key={detail.id}>
                    <span key={detail.id} className="Talent-Tag">
                      {detail.tag}{" "}
                    </span>
                    <span key={detail.id}>
                      {detail.date}
                      {"   -   "}
                      {detail.duration}
                    </span>
                    <button className="Request-Button">Request</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Event;
