import React from 'react';

const ShowCase = (props) => {

    return (
        <React.Fragment>
            <div className="col-md-6 showcase">
                <h2>Engage</h2>
                <h5>Tell Powerful Stories and Create Mesmerizing Blog Posts with Unique Content Design Elements</h5>
                <p>Divi is, by far, the world's most powerful and user friendly means of creating visually stunning content for the web.
                No other tool makes it so easy for users of any skill level to create content experiences that
                until recently only big budgets and skilled developers could achieve.</p>
                <a>Explore</a>
            </div>
            <div className="col-md-6" style={{backgroundImage: "https://www.elegantthemes.com/images/home/storytell-01-large.jpg"}}>
                <img style={{maxWidth:'100%'}} src='https://www.elegantthemes.com/images/home/storytell-02-large.jpg' />
            </div>
        </React.Fragment>    
    )

}
export default ShowCase;