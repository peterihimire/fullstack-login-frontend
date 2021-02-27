// import React from "react";

// import Input from "../../shared/components/FormElements/Input";
// import Button from "../../shared/components/FormElements/Button";
// import {
//   VALIDATOR_REQUIRE,
//   VALIDATOR_MINLENGTH,
// } from "../../shared/util/validators";
// import { useForm } from "../../shared/hooks/form-hook";
// import "./PropertyForm.css";

// const NewPropertyPage = () => {
//   const [formState, inputHandler] = useForm(
//     {
//       name: {
//         value: "",
//         isValid: false,
//       },
//       slug: {
//         value: "",
//         isValid: false,
//       },
//       location: {
//         value: "",
//         isValid: false,
//       },
//       amount: {
//         value: "",
//         isValid: false,
//       },
//       completion: {
//         value: "",
//         isValid: false,
//       },
//       description: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   const placeSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(formState.inputs); // send this to the backend!
//   };

//   return (
//     <form className="place-form" onSubmit={placeSubmitHandler}>
//       <Input
//         id="name"
//         element="input"
//         type="text"
//         label="name"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid name."
//         onInput={inputHandler}
//       />
//       <Input
//         id="slug"
//         element="input"
//         type="text"
//         label="slug"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid slug."
//         onInput={inputHandler}
//       />
//       <Input
//         id="location"
//         element="input"
//         type="text"
//         label="location"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid location."
//         onInput={inputHandler}
//       />
//       <Input
//         id="amount"
//         element="input"
//         type="text"
//         label="amount"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid amount."
//         onInput={inputHandler}
//       />
//       <Input
//         id="completion"
//         element="input"
//         type="text"
//         label="completion"
//         validators={[VALIDATOR_REQUIRE()]}
//         errorText="Please enter a valid completion."
//         onInput={inputHandler}
//       />
//       <Input
//         id="description"
//         element="textarea"
//         rows={5} //could be left out and the default row of 3 will be used
//         label="Description"
//         validators={[VALIDATOR_MINLENGTH(5)]}
//         errorText="Please enter a valid description (at least 5 characters)."
//         onInput={inputHandler}
//       />
//       <Button type="submit" disabled={!formState.isValid}>
//         ADD PROPERTY
//       </Button>
//     </form>
//   );
// };

// export default NewPropertyPage;

import React from "react";
import "./PropertyForm.css";

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class NewPropertyPage extends React.Component {
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
      <div className="App">
        {/* <header>Form Validation</header> */}
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
    );
  }
}

export default NewPropertyPage;
