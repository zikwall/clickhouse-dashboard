import React from 'react';
import {SwithButton} from "./index";

export default class extends React.Component {
    state = {
        activeSheet: null,
        availableSheets: []
    };

    setActiveSheet = (sheetIndex) => {
        this.setState({
            activeSheet: sheetIndex
        })
    };

    setAvailableSheets = (sheets) => {
        this.setState({
            availableSheets: sheets
        });
    };

    getAvailableSheets = async () => {
        let available = [];

        for (let child of this.props.children) {
            available.push({index: child.props.sheetIndex, name: child.props.sheetName});
        }

        return available;
    };

    renderSheet = () => {
        let childrenWithExtraProp = null;

        for (let child of this.props.children) {
            if (this.state.activeSheet === null) {
                childrenWithExtraProp = child;
                break;
            }

            if (child.props.sheetIndex === this.state.activeSheet) {
                childrenWithExtraProp = child;
                break;
            }
        }

        return childrenWithExtraProp;
    };

    renderButtons = () => {
        let firstIsActive = false;
        let isActive = false;

        const buttons = this.state.availableSheets.map((sheet, index) => {
            if (this.state.activeSheet === null && firstIsActive === false) {
                firstIsActive = true;
                isActive = true;
            } else {
                isActive = false
            }

            if (this.state.activeSheet === sheet.index) {
                isActive = true;
            }

            return <SwithButton key={index} click={() => this.setActiveSheet(sheet.index)} isActive={isActive} name={sheet.name} />;
        });

        return buttons;
    };

    async componentDidMount() {
        const sheets = await this.getAvailableSheets();
        this.setAvailableSheets(sheets);
    }

    render () {
        return (
            <>
                <div className="row no-gutters py-4">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="btn-group btn-group-sm btn-group-toggle d-inline-flex mb-4 mb-sm-0 mx-auto" aria-label="Page actions">
                            { this.renderButtons() }
                        </div>
                    </div>
                </div>

                <div className="row">
                    { this.renderSheet() }
                </div>
            </>
        );
    }
}


