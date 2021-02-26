import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./PropertyForm.css";

const NewPropertyPage = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      slug: {
        value: "",
        isValid: false,
      },
      location: {
        value: "",
        isValid: false,
      },
      amount: {
        value: "",
        isValid: false,
      },
      completion: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name."
        onInput={inputHandler}
      />
      <Input
        id="slug"
        element="input"
        type="text"
        label="slug"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid slug."
        onInput={inputHandler}
      />
      <Input
        id="location"
        element="input"
        type="text"
        label="location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid location."
        onInput={inputHandler}
      />
      <Input
        id="amount"
        element="input"
        type="text"
        label="amount"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid amount."
        onInput={inputHandler}
      />
      <Input
        id="completion"
        element="input"
        type="text"
        label="completion"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid completion."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        rows={5} //could be left out and the default row of 3 will be used
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PROPERTY
      </Button>
    </form>
  );
};

export default NewPropertyPage;
