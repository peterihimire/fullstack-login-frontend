import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { PropertyContext } from "../context";
import "./PropertyDescriptionPage.css";

const PropertyDescriptionPage = (props) => {
  console.log(props);
  console.log(props.match.params.id);

  const [propId, setPropId] = React.useState({
    id: props.match.params.id,
  });
  const [loadedProperty, setLoadedProperty] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  console.log(propId);

  // MAKE REQUEST FOR ALL PROPERTIES
  const getSingleProperty = () => {
    setIsLoading(true);
    fetch(`http://localhost:7000/api/properties/${propId.id}`, {
      // headers: {
      //   Authorization: "Bearer " + auth.token,
      // },
    })
      .then((response) => {
        response
          .json()
          .then((res) => {
            console.log(res);
            if (!response.ok) {
              throw new Error(res.msg);
            }
            // setIsLoading(false);
            console.log(res);
            console.log(res.property);
            const loadProperty = res.property;
            setLoadedProperty(loadProperty);
          })
          .catch((err) => {
            console.log(err);
            console.log(typeof err);
            // setIsLoading(false);
            // setError(
            //   err.message || "You are not Authorized to view this page!"
            // );
          });
      })
      .catch((err) => {
        console.log(err);
        // setIsLoading(false);
        // setError(err.msg || "Error occured , please try again!");
      });
  };

  // useEffect(() => {
  //   getSingleProperty();
  // }, []);

  useEffect(() => {
    if (!propId.id) {
      console.log(propId.id);
      // setIsLoading(true);
    }
    getSingleProperty();
  }, [propId.id]);
  console.log(loadedProperty);
  return (
    <>
      {loadedProperty ? (
        <section className="detail-section">
          <div className="detail-content ">
            <div className="modal-close-div">
              {/* <Link to="/co-ownership">
              <img src={modalClose} alt="modal close" className="" />
            </Link> */}
            </div>
            <div className="my-lightbox">
              <div className="big-img">
                <img
                  src={`http://localhost:7000/${loadedProperty.image}`}
                  alt="main-big"
                />
              </div>
            </div>
            <div className="detail-text">
              <h3>Name</h3>
              <h4>{loadedProperty.name}</h4>
              <h3>Location</h3>
              <p className="lc">{loadedProperty.location}</p>
              <h3>Property Detail</h3>
              <p>{loadedProperty.description}</p>
              <h3>Amount</h3>
              <p className="amt">₦{loadedProperty.amount} Million</p>
              <h3>Completion</h3>
              <p className="amt">{loadedProperty.completion}% payment completed </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PropertyDescriptionPage;
// // To get a single property
// const getSingleProperty = (slug) => {
//   let myProperties = properties;

//   const singleP = myProperties.filter((property) => {
//     // console.log(property);
//     return property.slug === slug;
//   });

//   return singleP[0];
// };

// const property = getSingleProperty(slugState.slug);
// const property = getProperty(slugState.slug);
// console.log(setSlugState);
