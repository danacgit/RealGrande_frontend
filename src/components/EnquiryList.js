import axios from "axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns';

const EnquiryList = () => {


   let [enquiries,setEnquiries] =  useState();
//use axios, and use get on backend url to get enquiries
 
useEffect( () => {    
    async function fetchData() {
        let resp =  await axios.get(process.env.REACT_APP_BACKEND_URL);
        let data = await resp.data;  
        setEnquiries(data);
        console.log(data);
      }
      fetchData();    
  },[]);


  if(!enquiries) {
    <h3>Loading enquiries. Please wait. </h3>
  }
  else {
    return (
<div>
    <h3> Enquiries Received:</h3>
    <div class="table-responsive">
    <table class="table table-secondary">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date and time</th>
                <th scope="col">Remarks</th>
                <th scope="col">Date</th>
            </tr>
        </thead>

        <tbody>

            {
                enquiries.map(
                    (elem) => {
                        console.log(elem);
                        return <tr>
                            <td>{elem.ename}</td>
                            <td>{elem.email}</td>
                            <td>{elem.date}</td>
                            <td>{elem.remarks}</td>
                            <td>{format(new Date(elem.date), "MM/dd/yyyy")}</td>
                        </tr>
                         
                    }
                )
            }  
           
        </tbody>

    </table>
    </div>
        </div>
     );
}
}
export default EnquiryList;