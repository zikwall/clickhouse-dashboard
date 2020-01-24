import React, { Component } from 'react';
import { apiFetch } from "../../../services/api/Api";
import { Identity } from "../../../services/auth";
import './CreateUserForm.css';
import { NotFoundHttpException } from '../../../exceptions';

export default class CreateUserForm extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        username: '',
        email: '',
        password: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    save() {
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;
        let description =  this.state.description;
        
        return apiFetch('/api/v1/auth/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Identity.getAccessToken()
            },
            withCredentials: true,
            body: JSON.stringify({username, email, password, description}),
        }).then((response) => {
            console.log(response);
            this.props.closeCreateUserForm();
            this.props.loadUserList();
        }).catch((e) => {
            alert(e.message);
        }) 

    }

    render() {
        if (this.props.available == false) {
            return(
                <>
                <div></div>
                </>
            )
        }

        return(
            <>
            <div className="row create-user">
                <div className="close-btn">
                    <button className="btn btn-link" onClick={ () => {this.props.closeCreateUserForm()}}>X</button>
                </div>
                <div className="col-md-12">
                    <div>
                        <div className="form-group">
                            <label htmlFor="username">Логин</label>
                            <input type="text" className="form-control form-control-sm" 
                                id="username" 
                                placeholder="Введите логин" 
                                onChange={this.handleChange}
                                name="username"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control form-control-sm"
                                id="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Введите email"
                                onChange={this.handleChange}
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль</label>
                            <input type="text" className="form-control form-control-sm"
                                id="password"
                                placeholder="Введите пароль"
                                onChange={this.handleChange}
                                name="password"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Описание</label>
                            <textarea className="form-control form-control-sm"
                                rows="3"
                                id="description"
                                placeholder="Введите описание, наименование партнера"
                                onChange={this.handleChange}
                                name="description"
                            />
                        </div>
                        <button className="btn btn-primary mb-2" onClick={ () => {this.save()}}>Сохранить</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}