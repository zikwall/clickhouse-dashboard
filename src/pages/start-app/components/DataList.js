import React from 'react';

const DataList = ({ data }) => {
    let total = 0;

    data.forEach(function(item, i, arr) {
        total += +item.ctn;
    });

    const items = data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{ item.app }</td>
                <td>{ item.ctn }</td>
            </tr>
        )
    });

    const totalItem = (
        <tr key="total">
            <td style={{fontWeight: "bold"}}>total</td>
            <td style={{fontWeight: "bold"}}>{ total }</td>
        </tr>
    );

    items.push(totalItem);

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