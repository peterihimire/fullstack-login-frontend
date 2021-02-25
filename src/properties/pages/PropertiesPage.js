import React from "react";
import { useParams } from "react-router-dom";
import property1 from "../../assets/property-1.jpg";
import property2 from "../../assets/property-2.jpg";

import PropertyList from "../components/PropertyList";

const DUMMY_PROPERTIES = [
  {
    id: "p1",
    name: "fully furnished 4-bedroom semi-detached duplex",
    slug: "property-1",
    description:
      " Vasiti is the place where good people, who want to make an honest living should be. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qu  esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt utvoluptate aute id deserunt nisi. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
    // images:
    //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    images: property1,
    location: "phase 2, lekki",
    completion: "72",
    amount: "50",
  },
  {
    id: "p2",
    name: "fully furnished 3-bedroom semi-detached duplex",
    slug: "property-2",
    description:
      " Vasiti is the place where good people, who want to make an honest living should be. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qu  esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser unt utvoluptate aute id deserunt nisi. Amet minim mollit non deseruntullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
    images: property2,
    completion: 42,
    amount: 55,
  },
  // {
  //   id: 'p2',
  //   title: 'Emp. State Building',
  //   description: 'One of the most famous sky scrapers in the world!',
  //   imageUrl:
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
  //   address: '20 W 34th St, New York, NY 10001',
  //   location: {
  //     lat: 40.7484405,
  //     lng: -73.9878584
  //   },
  //   creator: 'u2'
  // }
];

const PropertiesPage = () => {
  // const userId = useParams().userId;
  // const loadedProperties = DUMMY_PROPERTIES.filter(place => place.creator === userId);
  const loadedProperties = DUMMY_PROPERTIES;

  return <PropertyList items={loadedProperties} />;
};

export default PropertiesPage;
