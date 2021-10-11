import React,{ Fragment,useState } from 'react';

function Contact(props) {

    const [data,setData] = useState({
        fullName:'',
        phone:'',
        email:'',
        message:''
    })

    const formSubmit = (e)=>{
       e.preventDefault()
       const {fullName,phone,email,message} = data
       alert(
           `${fullName} ${phone} ${email} ${message}`
        )
    }
    const  changeEvent=(e) =>{
        const {name,value} = e.target
       setData((prevValue)=>{
          return {
              ...prevValue,
            [name]:value
          }
       })
    }

    return (
        <Fragment>
              <div className="my-5">
               <h1 className="text-center">Contact Us</h1>
            </div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                                <form  onSubmit={formSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                        <input type="text" className="form-control" required name="fullName" value={data.fullName} onChange={changeEvent} id="exampleFormControlInput1" placeholder="enter your name" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
                                        <input type="text" className="form-control" required name="phone" value={data.phone} onChange={changeEvent} id="exampleFormControlInput1" placeholder="enter your mobile no." />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input type="email" className="form-control"  required name="email" value={data.email} onChange={changeEvent} id="exampleFormControlInput1" placeholder="enter your email" />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control" name="message" required value={data.message} onChange={changeEvent} id="exampleFormControlTextarea1" rows="3" placeholder="write a message">

                                        </textarea>
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Submit form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;