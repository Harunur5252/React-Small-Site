import React,{ Fragment,useState,useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';


function Services(props) {
    const {imgScr,title,des} = props
    const [ spinner, setSpinner ] = useState({
        loading:true
    });
      
    useEffect(() => {
        setTimeout(() => setSpinner({loading:false}), 1000)
    }, [])

    return (
        <Fragment>
            {
                spinner.loading ?
                    <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
                            <Skeleton animation="wave" variant="rectangular" className="rounded" style={{width:'100%', height:'28vh'}} />
                            <div className="card-body">
                                <Skeleton animation="wave" variant="text" style={{width:'100%', height:'5vh'}} />
                                <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}} />
                                <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}} />
                                <Skeleton animation="wave" variant="text" style={{width:'100%', height:'3vh'}} /><br/>
                                <Skeleton animation="wave" variant="rectangular" className="rounded" style={{width:'30%', height:'6vh'}} />
                            </div>
                        </div>
                    </div>
     
                 :
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
            }
            
        </Fragment>
    );
}

export default Services;