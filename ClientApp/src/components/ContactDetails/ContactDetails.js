import React, { Component } from "react";

export class ContactDetails extends Component {
    render() {
        const phoneNumber = "114";
        let address = "세종시";
        return (
            <div>
                <ul>
                    <li>전화번호: {phoneNumber}</li>
                    <li>주소: {address}</li>
                </ul>
            </div>
        );
    }
}