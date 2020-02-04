import React from "react";
import { DimmyLoader, EmptyContent } from "../../../components/content-loader";

const ChannelsByGadgetTable = ({data, isDataLoading}) => {
    let content = <EmptyContent />;
    if (isDataLoading) {
        content = <DimmyLoader />;
    }

    if (data !== null) {
        const items = data.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.mobile}
                    </td>
                    <td>
                        {item.smarttv}
                    </td>
                    <td>
                        {item.web}
                    </td>
                </tr>
            )
        });

        return (
            <table className="table table-sm table-striped mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">Телеканал</th>
                        <th scope="col" className="border-0">Смартфоны</th>
                        <th scope="col" className="border-0">Смарт ТВ</th>
                        <th scope="col" className="border-0">Веб-сайт</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }

    

    return(
        <div className="col-md-12 col-sm-12 col mb-4" style={{padding: '5px'}}>
            <div className="card card-small"  style={{minHeight: '330px'}}>
                <div className="card-header border-bottom">
                    <h6 className="m-0">Детализация по типам устройств</h6>
                </div>
                <div className="card-body" style={{textAlign: 'center'}}>
                    { content }
                </div>
            </div>
        </div>
    );
}

export default ChannelsByGadgetTable;