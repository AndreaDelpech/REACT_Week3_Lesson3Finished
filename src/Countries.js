import React from "react";

export default function Countries(props) {
  return (
    <ul>
      {props.countries.map(function (country) {
        return (
          <li>
            {" "}
            The capital city of {country.name} is {country.capital}{" "}
          </li>
        );
      })}
    </ul>
  );
}
