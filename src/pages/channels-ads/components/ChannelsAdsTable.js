import React from "react";
import { DimmyLoader, EmptyContent } from "../../../components/content-loader";
import AdsstItem from "../../ads/components/adsstItem/AdsstItem";

const ChannelsAdsTable = ({data, isDataLoading}) => {
    
    let content = <EmptyContent />;
    if (isDataLoading) {
        content = <DimmyLoader />;
    }
    
    if (data !== null) {
        const items = data.adsData.map((item, index) => {
            return(
                <tr key={index}>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.adsid}
                    </td>
                    <AdsstItem adsst={"request"} data={item.groupData}/>
                    <AdsstItem adsst={"answer"} data={item.groupData}/>
                    <AdsstItem adsst={"show"} data={item.groupData}/>
                    <AdsstItem adsst={"skip"} data={item.groupData}/>
                    <AdsstItem adsst={"complete"} data={item.groupData}/>
                    <AdsstItem adsst={"complete_url"} data={item.groupData}/>
                </tr>
            )
        });

        return (
            <table className="table table-sm table-striped mb-0">
                <thead className="bg-light">
                    <tr>
                        <th scope="col" className="border-0">Телеканал</th>
                        <th scope="col" className="border-0">Площадка</th>
                        <th scope="col" className="border-0">request</th>
                        <th scope="col" className="border-0">answer</th>
                        <th scope="col" className="border-0">show</th>
                        <th scope="col" className="border-0">skip</th>
                        <th scope="col" className="border-0">complete</th>
                        <th scope="col" className="border-0">complete_url</th>
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