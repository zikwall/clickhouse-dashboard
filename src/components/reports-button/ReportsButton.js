import React from "react";

const ReportsButton = ({datePicker1, datePicker2, type}) => {

    const sendReport = () => {
        console.log(datePicker1,datePicker2, type);
    }

    return (
            <button className="mb-2 btn btn-sm btn-success mr-1" onClick={sendReport}>Сформировать отчет</button>
    )
};

export default ReportsButton;