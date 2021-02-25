import React from "react";
import "./PropertyList.css";
import PropertyItem from "./PropertyItem";
import Card from "../../shared/components/UIElements/Card";

const PropertyList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h2>No Property found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((property) => {
        return (
          <PropertyItem
            key={property.id}
            id={property.id}
            name={property.name}
            slug={property.slug}
            location={property.location}
            amount={property.amount}
            completion={property.completion}
            description={property.description}
            image={property.images}
          />
        );
      })}
    </ul>
  );
};

export default PropertyList;
