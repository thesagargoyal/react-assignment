import React, { useState } from 'react';

const Contact = () => {

  const [data, setData]=useState({
    name:"",
    phone:"",
    email:""
  });

  const inputEvent = (event)=>{
      const {name, value} = event.target;
      setData((preVal)=>{
        return{
          ...preVal,
          [name]:value,
        }
      })
  }

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(
      `       Your Name : ${data.name}
       Your Phone : ${data.phone}
       Your Email : ${data.email}
       Has been Submitted Successfully`
    )
  };


  return (

    <>
        <div className="my-5">
          <h1 className="text-center">
            Contact Us
          </h1>
          <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter Your Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={data.name} onChange={inputEvent} placeholder="Enter Your Name"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter Your Phone Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Phone Number"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> Enter Your Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={inputEvent} placeholder="Enter Your Email"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  );

}

export default Contact;