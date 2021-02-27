import React from "react";
// import { useParams } from "react-router-dom";
import property1 from "../../assets/property-1.jpg";
import property2 from "../../assets/property-2.jpg";
import Card from "../../shared/components/UIElements/Card";

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
];

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

// let propertyId = useParams().propertyId;
// console.log(propertyId);

class UpdatePropertiesPage extends React.Component {
  // let propertyId = useParams().propertyId;

  // if (!propertyId) {
  //   return (
  //     <div className="center">
  //       <Card>
  //         <h2>Property with this id could not be found.</h2>
  //       </Card>
  //     </div>
  //   );
  // }

  state = {
    name: "",
    nameValid: false,
    slug: "",
    slugValid: false,
    location: "",
    locationValid: false,
    amount: "",
    amountValid: false,
    completion: "",
    completionValid: false,
    description: "",
    descriptionValid: false,
    formValid: false,
    errorMsg: {},
  };

  validateForm = () => {
    const {
      nameValid,
      slugValid,
      locationValid,
      amountValid,
      completionValid,
      descriptionValid,
    } = this.state;
    this.setState({
      formValid:
        nameValid &&
        slugValid &&
        locationValid &&
        amountValid &&
        completionValid &&
        descriptionValid,
    });
  };
  // VALIDITY FOR NAME
  updateName = (name) => {
    this.setState({ name }, this.validateName);
  };

  validateName = () => {
    const { name } = this.state;
    let nameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (name.length < 3) {
      nameValid = false;
      errorMsg.name = "Must be at least 3 characters long";
    }

    this.setState({ nameValid, errorMsg }, this.validateForm);
  };

  // VALIDITY FOR SLUG
  updateSlug = (slug) => {
    this.setState({ slug }, this.validateSlug);
  };

  validateSlug = () => {
    const { slug } = this.state;
    let slugValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (slug.length < 3) {
      slugValid = false;
      errorMsg.slug = "Must be at least 3 characters long";
    }

    this.setState({ slugValid, errorMsg }, this.validateForm);
  };

  // VALIDITY FOR LOCATION
  updateLocation = (location) => {
    this.setState({ location }, this.validateLocation);
  };

  validateLocation = () => {
    const { location } = this.state;
    let locationValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (location.length < 3) {
      locationValid = false;
      errorMsg.location = "Must be at least 3 characters long";
    }

    this.setState({ locationValid, errorMsg }, this.validateForm);
  };

  // VALIDITY FOR AMOUNT
  updateAmount = (amount) => {
    this.setState({ amount }, this.validateAmount);
  };

  validateAmount = () => {
    const { amount } = this.state;
    let amountValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (amount.length < 3) {
      amountValid = false;
      errorMsg.amount = "Must be at least 3 characters long";
    }

    this.setState({ amountValid, errorMsg }, this.validateForm);
  };

  // VALIDITY FOR COMPLETION
  updateCompletion = (completion) => {
    this.setState({ completion }, this.validateCompletion);
  };

  validateCompletion = () => {
    const { completion } = this.state;
    let completionValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (completion.length < 3) {
      completionValid = false;
      errorMsg.completion = "Must be at least 3 characters long";
    }

    this.setState({ completionValid, errorMsg }, this.validateForm);
  };

  // VALIDITY FOR DESCRIPTION
  updateDescription = (description) => {
    this.setState({ description }, this.validateDescription);
  };

  validateDescription = () => {
    const { description } = this.state;
    let descriptionValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (description.length < 3) {
      descriptionValid = false;
      errorMsg.description = "Must be at least 3 characters long";
    }

    this.setState({ descriptionValid, errorMsg }, this.validateForm);
  };

  propertySubmitHandler = (e) => {
    e.preventDefault();
    console.log("name:" + this.state.name);
    console.log("slug:" + this.state.slug);
    console.log("location:" + this.state.location);
    console.log("amount:" + this.state.amount);
    console.log("completion:" + this.state.completion);
    console.log("description:" + this.state.description);

    const data = {
      name: this.state.name,
      slug: this.state.slug,
      location: this.state.location,
      amount: this.state.amount,
      completion: this.state.completion,
      description: this.state.description,
    }; // Sending this to the backend
    console.log(data);
  };

  render() {
    return (
      <div>
        <div className="App">
          <h4>Updated Property Form</h4>
          {/* <main role="main"> */}
          <form action="#" id="js-form" onSubmit={this.propertySubmitHandler}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <ValidationMessage
                valid={this.state.nameValid}
                message={this.state.errorMsg.name}
              />
              <input
                type="text"
                id="name"
                name="name"
                className="form-field"
                value={this.state.name}
                onChange={(e) => this.updateName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="slug">slug</label>
              <ValidationMessage
                valid={this.state.slugValid}
                message={this.state.errorMsg.slug}
              />
              <input
                type="text"
                id="slug"
                name="slug"
                className="form-field"
                value={this.state.slug}
                onChange={(e) => this.updateSlug(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">location</label>
              <ValidationMessage
                valid={this.state.locationValid}
                message={this.state.errorMsg.location}
              />
              <input
                type="text"
                id="location"
                name="location"
                className="form-field"
                value={this.state.location}
                onChange={(e) => this.updateLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount">amount</label>
              <ValidationMessage
                valid={this.state.amountValid}
                message={this.state.errorMsg.amount}
              />
              <input
                type="text"
                id="amount"
                name="amount"
                className="form-field"
                value={this.state.amount}
                onChange={(e) => this.updateAmount(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="completion">completion</label>
              <ValidationMessage
                valid={this.state.completionValid}
                message={this.state.errorMsg.completion}
              />
              <input
                type="text"
                id="completion"
                name="completion"
                className="form-field"
                value={this.state.completion}
                onChange={(e) => this.updateCompletion(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">description</label>
              <ValidationMessage
                valid={this.state.descriptionValid}
                message={this.state.errorMsg.description}
              />
              <textarea
                type="text"
                id="description"
                name="description"
                rows="8"
                className="form-field-2"
                value={this.state.description}
                onChange={(e) => this.updateDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-controls">
              <button
                className="button"
                type="submit"
                disabled={!this.state.formValid}
              >
                Add Property
              </button>
            </div>
          </form>
          {/* </main> */}
        </div>
      </div>
    );
  }
}

export default UpdatePropertiesPage;
