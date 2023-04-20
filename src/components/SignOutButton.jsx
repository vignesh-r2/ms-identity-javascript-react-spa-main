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
    /**
    [
        {
            "homeAccountId": "fef27f70-7a31-45ae-a3e2-3f840dd145bb.b76f3e23-31fe-405c-ba76-bd47f188cccb",
            "environment": "login.microsoftonline.com",
            "tenantId": "b76f3e23-31fe-405c-ba76-bd47f188cccb",
            "username": "sushanthkummitha_outlook.com#EXT#@testingtenant24.onmicrosoft.com",
            "localAccountId": "fef27f70-7a31-45ae-a3e2-3f840dd145bb",
            "name": "Sushanth Kummitha",
            "idTokenClaims": {
                "aud": "d16b2b7b-26cb-486c-9ff2-b3fbbb2661c0",
                "iss": "https://login.microsoftonline.com/b76f3e23-31fe-405c-ba76-bd47f188cccb/v2.0",
                "iat": 1677239015,
                "nbf": 1677239015,
                "exp": 1677242915,
                "aio": "ATQAy/8TAAAAd9hBdW8P7unldBIMwenOFVXX3pLabwZCtsD1Wae6a6HvCGGBYO/NHWbVX+glsxPC",
                "name": "Sushanth Kummitha",
                "nonce": "a4ea0f78-89e6-477e-94fd-4e07f2d6cd69",
                "oid": "fef27f70-7a31-45ae-a3e2-3f840dd145bb",
                "preferred_username": "sushanthkummitha_outlook.com#EXT#@testingtenant24.onmicrosoft.com",
                "rh": "0.AUoAIz5vt_4xXEC6dr1H8YjMy3sra9HLJmxIn_Kz-7smYcCJABY.",
                "sub": "NgWoHgA_qCcj2_B2Ggthpo3734Ia5Tz0Mx0OYXw22is",
                "tid": "b76f3e23-31fe-405c-ba76-bd47f188cccb",
                "uti": "q0RwIDdwvEaxWzGwzGYmAA",
                "ver": "2.0"
            }
        }
    ]
     */

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