import React, { Component } from "react";
import { AuthService, Identity } from "../../services/auth";
import { History } from "../../components/history";

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();

    class AuthWrapped extends Component {
        state = {
            confirm: null,
            loaded: false,
        };

        componentDidMount() {
            if (Identity.isGuest()) {
                History.rememberAndRedirect(this.props.location.pathname, '/auth/login');
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
                    Identity.logout();
                    History.rememberAndRedirect(this.props.location.pathname, '/auth/login');
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
