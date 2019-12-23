import React from  "react";
import ShowCase from "../sections/showcase.section";

class EngagePage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="showcase-sec">
                    <div className="container">
                        <h1>ENGAGE</h1>
                        <div className="row">
                            <ShowCase />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default EngagePage;

