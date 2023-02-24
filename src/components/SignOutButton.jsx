import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { msalInstance } from "..";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const account = msalInstance.getActiveAccount();
    const accounts = msalInstance.getAllAccounts();
    console.log(account);
    console.log(accounts);

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            msalInstance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            msalInstance.logoutRedirect({
                postLogoutRedirectUri: "http://localhost:3000/",
            });
        }
    }
    return (
        <DropdownButton variant="secondary" className="ml-auto" drop="left" title="Sign Out">
            <Dropdown.Item as="button" onClick={() => handleLogout("popup")}>Sign out using Popup</Dropdown.Item>
            <Dropdown.Item as="button" onClick={() => handleLogout("redirect")}>Sign out using Redirect</Dropdown.Item>
        </DropdownButton>
    )
}