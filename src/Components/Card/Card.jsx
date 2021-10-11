import React,{ Fragment } from 'react';

function Services(props) {
    const {imgScr,title,des} = props

    return (
        <Fragment>
             <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={imgScr} style={{width:'100%',height:'30vh'}} className="card-img-top" alt="card-image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{des}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Services;