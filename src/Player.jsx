import React from "react";
import Card from "react-bootstrap/Card";
import "./Player.css";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl,className }) => {
  return (
    <div className="cards">
      <Card style={{ width: "18rem", margin: "10px" }} className={className}>
        <img src={imageUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>team: {team}</p>
            <p>Nationality: {nationality}</p>
            <p> Jersey Number: {jerseyNumber}</p>
            <p>Age: {age}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
