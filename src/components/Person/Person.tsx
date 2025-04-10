import React from "react";

interface PersonProps {
  name: string;
  age: number;
  occupation: string;
}

const Person: React.FC<PersonProps> = ({ name, age, occupation }) => {
  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

export default Person;
