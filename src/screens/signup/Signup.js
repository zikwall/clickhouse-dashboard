
import React from "react";
import AuthService from "../../services/AuthService";

class Signup extends React.Component {
    Auth = new AuthService();

    state = {
        username: '',
        password: '',
    };

    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    componentWillMount() {
        if (this.Auth.loggedIn()) this.props.history.replace('/');
    }

    render() {
        return (
            <>
                <div className="col-lg-3 col-md-5 auth-form mx-auto my-auto">
                    <div className="card">
                        <div className="card-body">
                            <img className="auth-form__logo d-table mx-auto mb-3"
                                 src={require("./../../assets/images/shards-dashboards-logo.svg")}
                                 alt="Shards Dashboards - Register Template" />
                            <h5 className="auth-form__title text-center mb-4">Create New Account</h5>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Repeat Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2"
                                           placeholder="Repeat Password" />
                                </div>
                                <div className="form-group mb-3 d-table mx-auto">
                                    <div className="custom-control custom-checkbox mb-1">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                        <label className="custom-control-label" htmlFor="customCheck2">
                                            I agree with the <a href="#">Terms &amp; Conditions</a>.</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-pill btn-accent d-table mx-auto">Create
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
