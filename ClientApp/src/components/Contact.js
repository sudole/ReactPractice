import React, { Component } from "react";
import { ContactDetails } from "./ContactDetails/ContactDetails";

export class Contact extends Component {
    render() {
        return (
            <div>
                <h1>연락처</h1>
                <p>
                    연락처 들어오는 곳...
                </p>
                <ContactDetails />
            </div>
        )
    }
}