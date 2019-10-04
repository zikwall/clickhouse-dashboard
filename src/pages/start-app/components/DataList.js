import React from 'react';

const DataList = ({ data }) => {
    console.log(data);
    const items = data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{ item.app }</td>
                <td>{ item.ctn }</td>
            </tr>
        )
    });

    return (
        <table className="table mb-0">
            <thead className="bg-light">
            <tr>
                <th scope="col" className="border-0">Приложение</th>
                <th scope="col" className="border-0">Количество запусков</th>
            </tr>
            </thead>
            <tbody>
            { items }
            </tbody>
        </table>
    )
};

export default DataList;