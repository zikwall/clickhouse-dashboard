import React, { Component } from 'react';
import { apiFetch } from "../../../services/api/Api";
import { Identity } from "../../../services/auth";
import './CreateUserForm.css';

export default class CreateUserForm extends Component {

    render() {
        return(
            <>
            <div className="row create-user">
                <div className="close-btn">
                    <button className="btn btn-link">X</button>
                </div>
                <div className="col-md-12">
                    <div>
                        <div className="form-group">
                            <label for="login">Логин</label>
                            <input type="text" className="form-control form-comtrol-sm" id="login"></input>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control form-control-sm" id="email" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="form-group">
                            <label for="password">Пароль</label>
                            <input type="password" className="form-control form-control-sm" id="password"></input>
                        </div>
                        <div className="form-group">
                            <label for="comment">Комментарий</label>
                            <textarea className="form-control form-control-sm" rows="3" id="comment"></textarea>
                        </div>
                        <button className="btn btn-primary mb-2">Сохранить</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}