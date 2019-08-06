import React from 'react';
import {Bar} from 'react-chartjs-2';
import UserService from "../../services/UserService";

const Profile = () => {
    const data = {
        labels:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets:[{
            label: "Hours",
            fill: "start",
            data: [5, 6.4, 7.2, 6, 9, 4.7, 7],
            backgroundColor: "rgba(0, 123, 255, 1)",
            borderColor: "rgba(0, 123, 255, 1)",
            pointBackgroundColor: "#FFFFFF",
            pointHoverBackgroundColor: "rgba(0, 123, 255, 1)",
            borderWidth: 0
        }]
    };

    const options = {
        responsive:!0, scaleBeginsAtZero:!0, legend:!1, tooltips: {
            enabled: !1, mode: "index", position: "nearest"
        },
        elements: {
            line: {
                tension: 0
            }
        },
        scales: {
            xAxes:[ {
                stacked: !0, gridLines: !1
            }],
            yAxes:[ {
                ticks: {
                    beginAtZero: !0
                }
            }]
        }
    };

    return (
        <>
            <div className="row mt-4">
                <div className="col-sm-12 col-lg-4">
                    <div className="card card-small user-details mb-4">
                        <div className="card-header p-0">
                            <div className="user-details__bg">
                                <img src={require("./../../assets/images/user-profile/up-user-details-background.jpg")}
                                     alt="User Details Background Image" />
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="user-details__avatar mx-auto">
                                <img src={require("./../../assets/images/avatars/vk.jpeg")} alt="User Avatar" />
                            </div>
                            <h4 className="text-center m-0 mt-2">{ UserService.getUser().username() }</h4>
                            <p className="text-center text-light m-0 mb-2">{ UserService.getUser().email() }</p>
                            <ul className="user-details__social user-details__social--primary d-table mx-auto mb-4">
                                <li className="mx-1"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="mx-1"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li className="mx-1"><a href="#"><i className="fab fa-github"></i></a></li>
                                <li className="mx-1"><a href="#"><i className="fab fa-slack"></i></a></li>
                            </ul>
                            <div className="user-details__user-data border-top border-bottom p-4">
                                <div className="row mb-3">
                                    <div className="col w-50">
                                        <span>Email</span>
                                        <span>sierra@example.com</span>
                                    </div>
                                    <div className="col w-50">
                                        <span>Location</span>
                                        <span>Remote</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col w-50">
                                        <span>Phone</span>
                                        <span>+40 1234 567 890</span>
                                    </div>
                                    <div className="col w-50">
                                        <span>Account Number</span>
                                        <span>123456789</span>
                                    </div>
                                </div>
                            </div>
                            <div className="user-details__tags p-4">
                                    <span
                                        className="badge badge-pill badge-light text-light text-uppercase mb-2 border">User Experience</span>
                                <span
                                    className="badge badge-pill badge-light text-light text-uppercase mb-2 border">UI Design</span>
                                <span
                                    className="badge badge-pill badge-light text-light text-uppercase mb-2 border">React JS</span>
                                <span
                                    className="badge badge-pill badge-light text-light text-uppercase mb-2 border">HTML &amp; CSS</span>
                                <span
                                    className="badge badge-pill badge-light text-light text-uppercase mb-2 border">JavaScript</span>
                                <span
                                    className="badge badge-pill badge-light text-light text-uppercase mb-2 border">Bootstrap 4</span>
                            </div>
                        </div>
                    </div>
                    <div className="card card-small mb-4">
                        <div className="card-header border-bottom">
                            <h6 className="m-0">Send Message</h6>
                            <div className="block-handle"></div>
                        </div>
                        <div className="card-body">
                            <form action="">
                                    <textarea name="" id="" cols="30" rows="6" className="form-control mb-3"
                                              style={{ minHeight: "150px" }}>
                                    </textarea>
                                <button type="submit" className="btn btn-accent btn-sm">Send Message</button>
                            </form>
                        </div>
                    </div>
                    <div className="card card-small user-teams mb-4">
                        <div className="card-header border-bottom">
                            <h6 className="m-0">Teams</h6>
                            <div className="block-handle"></div>
                        </div>
                        <div className="card-body p-0">
                            <div className="container-fluid">

                                <div className="row px-3">
                                    <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                                        <img className="rounded"
                                             src={require("./../.../../../assets/images/user-profile/team-thumb-1.png")}
                                        />
                                    </div>
                                    <div className="col user-teams__info pl-3">
                                        <h6 className="m-0">Team Edison</h6>
                                        <span className="text-light">21 Members</span>
                                    </div>
                                </div>

                                <div className="row px-3">
                                    <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                                        <img className="rounded"
                                             src={require("./../../assets/images/user-profile/team-thumb-2.png")}
                                        />
                                    </div>
                                    <div className="col user-teams__info pl-3">
                                        <h6 className="m-0">Team Shelby</h6>
                                        <span className="text-light">21 Members</span>
                                    </div>
                                </div>

                                <div className="row px-3">
                                    <div className="user-teams__image col-2 col-sm-1 col-lg-2 p-0 my-auto">
                                        <img className="rounded"
                                             src={require("./../../assets/images/user-profile/team-thumb-3.png")}
                                        />
                                    </div>
                                    <div className="col user-teams__info pl-3">
                                        <h6 className="m-0">Team Dante</h6>
                                        <span className="text-light">21 Members</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card card-small user-stats mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6 col-sm-3 text-center">
                                    <h4 className="m-0">1128</h4>
                                    <span className="text-light text-uppercase">Tasks</span>
                                </div>
                                <div className="col-6 col-sm-3 text-center">
                                    <h4 className="m-0">72.4%</h4>
                                    <span className="text-light text-uppercase">Completed</span>
                                </div>
                                <div className="col-6 col-sm-3 text-center">
                                    <h4 className="m-0">4</h4>
                                    <span className="text-light text-uppercase">Projects</span>
                                </div>
                                <div className="col-6 col-sm-3 text-center">
                                    <h4 className="m-0">3</h4>
                                    <span className="text-light text-uppercase">Teams</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer py-0">
                            <div className="row">
                                <div className="col-12 col-sm-6 border-top pb-3 pt-2 border-right">
                                    <div className="progress-wrapper">
                                        <span className="progress-label">Workload</span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar progress-bar-striped" role="progressbar"
                                                 aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                 style={{ width: "80%" }}>
                                                <span className="progress-value">80%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 border-top pb-3 pt-2">
                                    <div className="progress-wrapper">
                                        <span className="progress-label">Performance</span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar progress-bar-striped bg-success"
                                                 role="progressbar" aria-valuenow="92" aria-valuemin="0"
                                                 aria-valuemax="100" style={{ width: "92%" }}>
                                                <span className="progress-value">92%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card card-small mb-4">
                        <div className="card-header border-bottom">
                            <h6 className="m-0">Weekly Performance Report</h6>
                            <div className="block-handle"></div>
                        </div>
                        <div className="card-body pt-0">
                            <Bar data={data}/>
                        </div>
                    </div>

                    <div className="card card-small user-activity mb-4">
                        <div className="card-header border-bottom">
                            <h6 className="m-0">User Activity</h6>
                            <div className="block-handle"></div>
                        </div>
                        <div className="card-body p-0">
                            <div className="user-activity__item pr-3 py-3">
                                <div className="user-activity__item__icon">
                                    <i className="material-icons"></i>
                                </div>
                                <div className="user-activity__item__content">
                                    <span className="text-light">23 Minutes ago</span>
                                    <p>Assigned himself to the <a href="#">Shards Dashboards</a> project.</p>
                                </div>
                                <div className="user-activity__item__action ml-auto">
                                    <button className="ml-auto btn btn-sm btn-white">View Project</button>
                                </div>
                            </div>
                            <div className="user-activity__item pr-3 py-3">
                                <div className="user-activity__item__icon">
                                    <i className="material-icons"></i>
                                </div>
                                <div className="user-activity__item__content">
                                    <span className="text-light">2 Hours ago</span>
                                    <p>Marked <a href="#">7 tasks</a> as <span
                                        className="badge badge-pill badge-outline-success">Complete</span> inside
                                        the <a href="#">DesignRevision</a> project.</p>
                                </div>
                            </div>
                            <div className="user-activity__item pr-3 py-3">
                                <div className="user-activity__item__icon">
                                    <i className="material-icons"></i>
                                </div>
                                <div className="user-activity__item__content">
                                    <span className="text-light">3 Hours and 10 minutes ago</span>
                                    <p>Added <a href="#">Jack Nicholson</a> and <a href="#">3 others</a> to the <a
                                        href="#">DesignRevision</a> team.</p>
                                </div>
                                <div className="user-activity__item__action ml-auto">
                                    <button className="ml-auto btn btn-sm btn-white">View Team</button>
                                </div>
                            </div>
                            <div className="user-activity__item pr-3 py-3">
                                <div className="user-activity__item__icon">
                                    <i className="material-icons"></i>
                                </div>
                                <div className="user-activity__item__content">
                                    <span className="text-light">2 Days ago</span>
                                    <p>Opened <a href="#">3 issues</a> in <a href="#">2 projects</a>.</p>
                                </div>
                            </div>
                            <div className="user-activity__item pr-3 py-3">
                                <div className="user-activity__item__icon">
                                    <i className="material-icons"></i>
                                </div>
                                <div className="user-activity__item__content">
                                    <span className="text-light">2 Days ago</span>
                                    <p>Added <a href="#">3 new tasks</a> to the <a
                                        href="#">DesignRevision</a> project:</p>
                                    <ul className="user-activity__item__task-list mt-2">
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="user-activity-task-1" />
                                                <label className="custom-control-label"
                                                       htmlFor="user-activity-task-1">
                                                    Fix blog pagination issue.</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input"
                                                       id="user-activity-task-2" />
                                                <label className="custom-control-label"
                                                       htmlFor="user-activity-task-2">
                                                    Remove extra padding from blog post container.</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="user-activity__item pr-3 py-3">
                                <div className="user-activity__item__icon">
                                    <i className="material-icons"></i>
                                </div>
                                <div className="user-activity__item__content">
                                    <span className="text-light">2 Days ago</span>
                                    <p>Marked <a href="#">3 tasks</a> as <span
                                        className="badge badge-pill badge-outline-danger">Invalid</span> inside
                                        the <a href="#">Shards Dashboards</a> project.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border-top">
                            <button className="btn btn-sm btn-white d-table mx-auto">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;