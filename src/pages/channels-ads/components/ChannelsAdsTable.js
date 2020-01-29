import React from "react";
import { DimmyLoader, EmptyContent } from "../../../components/content-loader";

const ChannelsAdsTable = (data, isDataLoading) => {
    let content = <EmptyContent />;
    if (isDataLoading) {
        content = <DimmyLoader />;
    }
    
    if (Object.keys(data).length == 0) {
        const items = data.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                    </td>
                    <td> 
                    </td>
                </tr>
            )
        });

        return (
            <table className="table table-sm table-striped mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">Телеканал</th>
                        <th scope="col" className="border-0">Онлайн</th>
                        <th scope="col" className="border-0">Архив</th>
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
                    <h6 className="m-0">Реклама на каналах</h6>
                </div>
                <div className="card-body" style={{textAlign: 'center'}}>
                    { content }
                </div>
            </div>
        </div>
    );
}

export default ChannelsAdsTable;