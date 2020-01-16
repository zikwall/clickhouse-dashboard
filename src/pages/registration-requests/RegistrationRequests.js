import React, { Component } from 'react';
import { apiFetch } from "../../services/api/Api";
import { Identity } from "../../services/auth";
import CreateUserForm from "./create-user-form";

export default class RegistrationRequests extends Component {
    state = {
        userList: [
            {
                id: '',
                username: '',
                email: '',
                confirmed_at: '',
                blocked_at: null,
                registration_ip: null,
                created_at: '',
                updated_at: ''
            }
        ],
        createUser: false,
    }

    async componentDidMount() {
        await this.loadUserList();
    }

    loadUserList = async () =>  {
        const data = await apiFetch('/api/v1/user/list');

        this.setState({
            userList: data
        });
    }

    unixTimeToDate(unixtime) {
        
        let confirmDate = new Date(unixtime * 1000);
        
        let day = "0" + confirmDate.getDay();
        let month = "0" + (confirmDate.getMonth() + 1);
        let year = confirmDate.getFullYear();
        let hour = confirmDate.getHours();
        let minute = "0" + confirmDate.getMinutes();
        let formatDate = `${hour}:${minute.substr(-2)} ${day.substr(-2)}-${month.substr(-2)}-${year}`;
        
        return formatDate;
    }

    confirmUser(userId, index) {
        let confirmed = this.state.userList.find(confirm => confirm.id === userId).confirmed_at;
        
        if (confirmed !== null) {
            return;
        }

        return apiFetch('/api/v1/auth/register/confirm?id=' + userId, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Identity.getAccessToken()
            },
            withCredentials: true,
        }).then((response) => {
            if (response.id) {
                let items = this.state.userList;
                items[index].confirmed_at = response.confirmed_at;

                this.setState({
                    userList: items
                });
            }

            alert(response.message);
        });
        
    }

    unconfirmUser(userId, index) {
        return apiFetch('/api/v1/auth/register/unconfirm?id=' + userId, {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Identity.getAccessToken()
            },
            withCredentials: true,
        }).then((response) => {
            if (response.id) {
                let items = this.state.userList;
                items[index].confirmed_at = response.confirmed_at;

                this.setState({
                    userList: items
                });
            }
            
            alert(response.message);
        });
    }

    isConfirmedUserStyle(unixtime) {
        if (!unixtime) {
            return "false";
        }

        return "true";
    }

    showCreateUserForm() {
        this.setState({
            createUser: true
        });
    }

    closeCreateUserForm = () => {
        this.setState({
            createUser: false
        });
    }

    render() {
        const available = this.state.createUser;
        let createUserForm = '';

        if (available) {
            createUserForm = <CreateUserForm></CreateUserForm>;
        }
        

        return (
            <>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-4 mb-sm-0">
                        <h3 className="page-title">Пользователи</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <button className="btn btn-primary btn-sm" onClick={ () => this.showCreateUserForm()}>
                                Добавить
                            </button>
                        </div>
                        <div>
                            <CreateUserForm
                                available ={this.state.createUser} 
                                closeCreateUserForm={this.closeCreateUserForm}
                                loadUserList={this.loadUserList}
                            />
                        </div>
                        <table className="table table-stripped table-sm mb-0">
                            <thead className="bg-light">
                                <tr>
                                    <th scope="col" className="border-0">Login</th>
                                    <th scope="col" className="border-0">Email</th>
                                    <th scope="col" className="border-0">Created Date</th>
                                    <th scope="col" className="border-0">Status</th>
                                    <th scope="col" className="border-0">Control</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.userList.map((user, index) => {
                                return <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{this.unixTimeToDate(user.created_at)}</td>
                                        <td>{this.isConfirmedUserStyle(user.confirmed_at)}</td>
                                        <td>
                                            <div className="btn-group btn-group-sm btn-group-toggle d-inline-flex mb-4 mb-sm-0 mx-auto">
                                            <button className="btn btn-success" onClick={ () => this.confirmUser(user.id, index) }><i className="material-icons">check</i></button>
                                            <button className="btn btn-danger" onClick={ () => this.unconfirmUser(user.id, index) }><i className="material-icons">delete</i></button>
                                            </div>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}