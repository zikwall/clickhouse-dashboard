import React from "react";
import { AuthService, Identity } from "../../services/auth";

class Signup extends React.Component {
    Auth = new AuthService();

    state = {
        username: '',
        password: '',
        repeatPassword: '',
        email: '',
        agreeCheck: false,

    };

    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    };

    handleFormSubmit = (e) => {
        return alert("Для регистрации обращаться к менеджеру");
        e.preventDefault();

        if (this.state.password != this.state.repeatPassword) {
            return alert("check correctness passwords");
        }

        this.Auth.signup(this.state.username, this.state.email, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("An error has occurred");
                }

                this.props.history.replace('/');
            })
            .catch(err =>  {
                alert(err);
            })
    };

    componentWillMount() {
        if (!Identity.isGuest()) {
            this.props.history.replace('/');
        }
    }

    render() {
        return (
            <>
                <div className="col-lg-3 col-md-5 auth-form mx-auto my-auto">
                    <div className="card">
                        <div className="card-body">
                            <img className="auth-form__logo d-table mx-auto mb-3"
                                 src={require("./../../assets/images/logo.png")}
                                 alt="React Dashboards - Register Template" />
                            <h5 className="auth-form__title text-center mb-4">Create New Account</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername1"
                                            placeholder="Enter username"
                                            name="username"
                                            onChange={this._handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email"
                                           name="email"
                                           onChange={this._handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password"
                                           name="password"
                                           onChange={this._handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Repeat Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2"
                                           placeholder="Repeat Password"
                                           name="repeatPassword"
                                           onChange={this._handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3 d-table mx-auto">
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" 
                                            name="agreeCheck"
                                            onChange={this._handleChange}
                                        />
                                        <label className="custom-control-label" htmlFor="customCheck2">
                                            I agree with the <a href="#">Terms &amp; Conditions</a>.</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-pill btn-accent d-table mx-auto" onClick={this.handleFormSubmit}>Create
                                    Account
                                </button>
                            </form>
                        </div>
                        <div className="card-footer border-top">
                            <ul className="auth-form__social-icons d-table mx-auto">
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-github"></i></a></li>
                                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="auth-form__meta d-flex mt-4">
                        <a href="/auth/forgot">Forgot your password?</a>
                        <a className="ml-auto" href="/auth/login">Sign In?</a>
                    </div>
                </div>
            </>
        );
    }
}

export default Signup;
