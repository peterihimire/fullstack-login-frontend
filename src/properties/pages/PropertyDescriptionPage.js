import React from "react";
// import Detail from "../components/Detail";
// import Footer from "../components/Footer";
// import { useContext } from "react";
// import { PropertyContext } from "../context";

const PropertyDescriptionPage = (props) => {
  // const context = useContext(PropertyContext);
  // const { properties, getProperty } = context;
  // console.log(context);
  // console.log(properties, getProperty);
  console.log(props);
  // console.log(props.match.params.slug);

  // const [slugState, setSlugState] = React.useState({
  //   slug: props.match.params.slug,
  // });

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

  return (
    <>
      {/* <Detail oneProperty={property} /> */}
      <section className="detail-section">
        <div className="detail-content ">
          <div className="modal-close-div">
            {/* <Link to="/co-ownership"> */}
            {/* <img src={modalClose} alt="modal close" className="" /> */}
            {/* </Link> */}
          </div>
          <div className="my-lightbox">
            <div className="">
              <div className="big-img">
                {/* <img src={image[0]} alt="main-big" /> */}
              </div>
              {/* <div className="small-img">
                {image.map((img) => (
                  <img src={img} alt="img array" key={img} />
                ))}
              </div> */}
            </div>
          </div>
          {/* <div className="detail-text">
            <h4>{name}</h4>
            <p className="lc">{location}</p>
            <p>{detail}</p>
            <p className="amt">₦{amount}</p>
          </div> */}
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
};

export default PropertyDescriptionPage;
