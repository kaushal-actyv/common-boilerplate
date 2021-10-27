import "./styles/index.css";

import React, { Component } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import { useStore, useStoreActions, useStoreRehydrated } from "easy-peasy";

import { submitForm } from "../../services";
import { validateForm } from "../../validation";
import NavBar from "../../components/Navbar";

export const SampleForm = () => {
  const [outletName, setOutletName] = React.useState("");
  const [ownerName, setOwnerName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isInvalidForm, setIsInvalidForm] = React.useState(false);

  // // getting the action functions
  // const setDistributorInfo = useStoreActions(
  //   (actions) => actions.setDistributorInfo
  // );
  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);
  const fetchVendors = useStoreActions((actions) => actions.fetchVendor);
  const consoleLog = useStoreActions((actions) => actions.consoleLog);

  React.useEffect(() => {
    // fetchTodos(); // calling the action function (similar to dispatch)
    // fetchVendors();
    // eslint-disable-next-line
  }, []);

  // reading store data
  // const distributorInfo = useStore((state) => state.distributorInfo);

  const handleSubmit = () => {
    const payload = { outletName, ownerName, address, email, phone };
    const isValid = validateForm(payload);
    fetchVendors();
    fetchTodos();
    // consoleLog();
    if (isValid) {
      setIsInvalidForm(false);
      //  setDistributorInfo(payload);
      submitForm(payload);
    } else {
      setIsInvalidForm(true);
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className=" form-container">
        <div class="field" id="owner-name" isRequired>
          <label class="label">Owner Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Owner Name"
              value={ownerName}
              onChange={(event) => {
                setOwnerName(event.target.value);
              }}
            />
          </div>
        </div>
        <div class="field" id="outlet-name" isRequired>
          <label class="label">Outlet Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Outlet Name"
              value={outletName}
              onChange={(event) => {
                setOutletName(event.target.value);
              }}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-success"
              type="text"
              placeholder="Text input"
              // value="bulma"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
          <p class="help is-success">This username is available</p>
        </div>

        <div class="field" id="email" isRequired>
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-danger"
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This email is invalid</p>
        </div>
        <div class="field">
          <label class="label" id="phone" isRequired>
            Phone
          </label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-danger"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
          <p class="help is-danger">This phone number is invalid</p>
        </div>

        <div class="field">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Address"
              value={address}
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
        <p> testing</p>
        {/* todo: change alert from chakra to bulma
          {isInvalidForm && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle mr={2}>Invalid Input!</AlertTitle>
              <AlertDescription>Please enter correct details.</AlertDescription>
              <CloseButton position="absolute" right="8px" top="8px" />
            </Alert>
          )} */}
      </div>
    </React.Fragment>
  );
};
