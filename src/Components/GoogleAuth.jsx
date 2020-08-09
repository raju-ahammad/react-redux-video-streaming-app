import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from "../actions"


export class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "78080733743-oqt4ceq49boivbee1vvfgs5ktscr02it.apps.googleusercontent.com",
                scope : "email"
            }).then(()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    };
    
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn();
        }
        else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };
    onSignOuClick = ()=> {
        this.auth.signOut()
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
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

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
