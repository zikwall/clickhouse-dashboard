import React from 'react';
import LoadOrNotData from "../load-or-not-data";
import AdsstItem from "../adsstItem";

const AdsTable = ({ adsData, isDataLoading }) => {
    if (adsData !== null) {
        const items = adsData.adsData.map((item, index) => {
            return(
                <tr key={index}>
                    <td style={{fontWeight: "bold"}}>{ item.adsid }</td>
                    <AdsstItem adsst={"request"} data={item.groupData}/>
                    <AdsstItem adsst={"answer"} data={item.groupData}/>
                    <AdsstItem adsst={"show"} data={item.groupData}/>
                    <AdsstItem adsst={"skip"} data={item.groupData}/>
                    <AdsstItem adsst={"complete"} data={item.groupData}/>
                    <AdsstItem adsst={"complete_url"} data={item.groupData}/>
                </tr>
            )
        });

        return(
            <div className="col-md-12 col-sm-12 mb-4" style={{padding: '5px'}}>
                <div className="card card-small" style={{minHeight: '330px'}}>
                    <div className="card-header border-bottom">
                        <h6 className="m-0">Статистика по рекламным площадкам</h6>
                    </div>
                    <div className="card-body">
                        <table className="table mb-0">
                            <thead className="bg-light">
                            <tr>
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
                            { items }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <LoadOrNotData isDataLoading={ isDataLoading }/>
    )
};

export default AdsTable;