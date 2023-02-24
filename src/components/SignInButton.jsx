import React from "react";
import { loginRequest } from "../authConfig";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { msalInstance } from "..";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 */
export const SignInButton = () => {
    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            msalInstance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        } else if (loginType === "redirect") {
            msalInstance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }
    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign In">
            <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>Sign in using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>Sign in using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}