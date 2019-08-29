import React from 'react';
import AdsstList from "../adsstList";
import AdsPie from "../ads-pie";
import LoadOrNotData from "../load-or-not-data";

const AdsTable = ({ adsData, isDataLoading }) => {
    if (adsData !== null) {
        const items = adsData.adsData.map((item, index) => {
            return(
                <React.Fragment key={index}>
                    <div className="col-md-6 col-sm-12 col mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">График { item.adsid }</h6>
                            </div>
                            <div className="card-body">
                                <AdsPie data={ item.groupData }/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4" style={{padding: '5px'}}>
                        <div className="card card-small" style={{minHeight: '330px'}}>
                            <div className="card-header border-bottom">
                                <h6 className="m-0">Рекламная площадка { item.adsid }</h6>
                            </div>
                            <div className="card-body">
                                <AdsstList groupData={ item.groupData }/>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        });

        return(
           <>
               { items }
           </>
        )
    }


    return(
        <LoadOrNotData isDataLoading={ isDataLoading }/>
    )
};

export default AdsTable;