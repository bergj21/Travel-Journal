import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <div className="card">
        <img src={props.imageUrl}/>
        <div className="card-information">
            <div className="card-location">
                <FontAwesomeIcon icon={faLocationDot} className="location-dot" />
                <span className="card-country bold">{props.location}</span>
                <a className="google-maps" href={props.googleMapsUrl} target="_blank">
                    View on Google Maps
                </a>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <h2 className="card-date">{`${props.startDate} - ${props.endDate}`}</h2>
            <p className="card-description">{props.description}</p>
        </div>
    </div>
  );
}

export default Card;
