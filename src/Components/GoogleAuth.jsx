import React, { Component } from 'react'

export class GoogleAuth extends Component {
    state = { isSignedIn: null }

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "78080733743-oqt4ceq49boivbee1vvfgs5ktscr02it.apps.googleusercontent.com",
                scope : "email"
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    };
    
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOuClick = ()=> {
        this.auth.signOut()
    }
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick = {this.onSignOutClick}
                    className="ui red google button">
                    <i className="google icon">
                        Sign Out
                    </i>
                </button>
            );
        }
        else {
            return (
                <button onClick = {this.onSignInClick}
                    className="ui red google button">
                    <i className="google icon">
                        SignIn with google
                    </i>
                </button>
            );
        }
    }
    render() {
        return (
            <div>
                { this.renderAuthButton() }
            </div>
        )
    }
}

export default GoogleAuth;
