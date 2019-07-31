import React from "react";
import { withRouter } from 'react-router-dom';

const ErrorLayout = (props) => {
    return (
        <>
            <div className="main-content-container container">
                <div className="error">
                    <div className="error__content">
                        <h2>{ props.errorCode }</h2>
                        <h3>Something went wrong!</h3>
                        <p>There was a problem on our end. Please try again later.</p>
                        <button onClick={props.history.goBack} type="button" className="btn btn-primary btn-pill">← Go Back</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(ErrorLayout);