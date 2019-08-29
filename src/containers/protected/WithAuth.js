import React, { Component } from "react";
import { AuthService, Identity } from "../../services/auth";

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();

    class AuthWrapped extends Component {
        state = {
            confirm: null,
            loaded: false,
        };

        componentDidMount() {
            if (Identity.isGuest()) {
                this.props.history.replace("/auth/login");
            } else {
                try {
                    const confirm = Auth.getConfirm();

                    /**
                     * todo Тут нужен REDUX или Context
                     */
                    Auth.permissions().then((response) => {
                        Identity.setPermissions(response.access.permissions);

                        this.setState({
                            confirm: confirm,
                            loaded: true,
                        });
                    });

                } catch (err) {
                    console.log(err);
                    Identity.logout();
                    this.props.history.replace("/auth/login");
                }
            }
        }

        render() {
            if (this.state.loaded === false) {
                return null;
            }

            if (!this.state.confirm) {
                console.log("not confirmed!");
                return null;
            }

            return (
                <AuthComponent
                    {...this.props}
                />
            );
        }
    }

    return AuthWrapped;
}
