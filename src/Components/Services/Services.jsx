import React,{ Fragment} from 'react';
import Card from '../Card/Card';
import sData from '../../ServiceData/ServiceData'

function Services(props) {

    return (
        <Fragment>
            <div className="my-5">
               <h1 className="text-center">Our Services</h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                                { 
                                    sData.map(val=>{
                                        return (
                                            <Card 
                                               key={val.id}
                                               imgScr={val.imgSrc}
                                               title={val.title}
                                               des={val.des}
                                            />
                                        )
                                    })
                                }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Services;