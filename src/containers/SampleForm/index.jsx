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
import { FormattedMessage } from "react-intl";
import translate from "../../i18n/translate";
import { I18nProvider, LOCALES } from "../../i18n";

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
  const [locale, setLocale] = React.useState(LOCALES.ENGLISH);
  return (
    <React.Fragment>
      <I18nProvider locale={locale}>
        <div className="field form-container">
          <label className="label">{translate("selectLanguage")}</label>
          <div className="control">
            <div className="select">
              <select
                onChange={(e) => {
                  setLocale(e.target.value);
                }}
              >
                <option value={LOCALES.ENGLISH}>English (en-US)</option>
                <option value={LOCALES.GERMAN}>German (de-DE)</option>
                <option value={LOCALES.FRENCH}>French (fr-CA)</option>
              </select>
            </div>
          </div>
          {translate("welcomeMessage", { name: "Divyansh" })}
        </div>
        {/* <NavBar /> */}
        <div className=" form-container">
          <div className="field" id="owner-name">
            <label className="label">{translate("ownerName")}</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Owner Name"
                value={ownerName}
                onChange={(event) => {
                  setOwnerName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="field" id="outlet-name">
            <label className="label">{translate("outletName")}</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Outlet Name"
                value={outletName}
                onChange={(event) => {
                  setOutletName(event.target.value);
                }}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">{translate("userName")}</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="text"
                placeholder="Text input"
                // value="bulma"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
            <p className="help is-success">{translate("userNameAvailable")}</p>
          </div>

          <div className="field" id="email">
            <label className="label">{translate("email")}</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">{translate("emailInvalid")}</p>
          </div>
          <div className="field">
            <label className="label" id="phone">
              {translate("phone")}
            </label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-danger"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p className="help is-danger">{translate("phoneInvalid")}</p>
          </div>

          <div className="field">
            <label className="label">{translate("address")}</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                {translate("iAgree")}{" "}
                <a href="#">{translate("termsAndConditions")}</a>
              </label>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="radio">
                <input type="radio" name="question" />
                {translate("yes")}
              </label>
              <label className="radio">
                <input type="radio" name="question" />
                {translate("no")}
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                {translate("submit")}
              </button>
            </div>
            <div className="control">
              <button className="button is-link is-light">
                {translate("cancel")}
              </button>
            </div>
          </div>
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
      </I18nProvider>
    </React.Fragment>
  );
};
