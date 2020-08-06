import React, { Component } from 'react'

export class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "78080733743-oqt4ceq49boivbee1vvfgs5ktscr02it.apps.googleusercontent.com",
                scope : "email"
            })
        });
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}

export default GoogleAuth;
