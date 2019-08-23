import React from "react";

const ASTable = ({ data }) => {
    const renderTBody = (data) => {
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

    return (
        <div style={{overflowY: 'scroll', maxHeight: '570px'}}>
            <table className="table mb-0">
                <thead className="bg-light">
                <tr>
                    <th scope="col" className="border-0">#</th>
                    <th scope="col" className="border-0">AS Org.</th>
                    <th scope="col" className="border-0">Count IP</th>
                </tr>
                </thead>
                <tbody>
                { renderTBody(data) }
                </tbody>
            </table>
        </div>
    );
};

export default ASTable;