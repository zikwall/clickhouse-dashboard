import React from "react";
import {apiFetch} from "../../services/api/Api";
import {ContentLoader} from "../../components/content-loader";

export default class AsnTable extends React.Component {
    renderTBody = (data) => {
        const tbody = data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index}</td>
                    <td>{item.autonomous_system_organization}</td>
                    <td>{item.countIP}</td>
                </tr>
            );
        });

        return tbody;
    };

    render() {

        if (this.props.loaded === false) {
            return (
                <ContentLoader countPlaceholders={4}/>
            );
        }

        return (
            <div style={{overflowY: 'scroll', maxHeight: '500px'}}>
                <table className="table mb-0">
                    <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">#</th>
                        <th scope="col" className="border-0">AS Org.</th>
                        <th scope="col" className="border-0">Count IP</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.renderTBody(this.props.data) }
                    </tbody>
                </table>
            </div>
        );
    }
};