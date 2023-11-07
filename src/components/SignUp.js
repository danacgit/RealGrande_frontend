import axios from "axios";
import { useState } from "react";


    const SignUp = () => {


        let [signUpObj,setSignupObj] = useState({name:'',email:'',password:''});
        let [signUpStatus, setSignUpStatus] = useState(false);
        let [dupeUserMsg,setDupUserMsg] = useState('');


        let changeHandler = (e) => {
            setSignupObj({...signUpObj,[e.target.name]:e.target.value});
            //console.log(signUpObj);            
        }


        let clickHandler = async (e) =>{
            e.preventDefault();
            console.log(signUpObj);
            try{
            let resp = await axios.post(
            process.env.REACT_APP_BACKEND_URL+ "signup",
            {...signUpObj});
            //' http://localhost:3002/signup'
            console.log("response status is "+resp.status);
            let data = await resp.data;
            console.log(data); // checking
            // can check mongodb Atlas to see if user has been added
            // can login and check to see if I am able to login fine
           
            // on successful sign up , set a flag to true
            if(data) {
                setSignUpStatus(true);
            }
            else {
                setDupUserMsg(" Sorry, a user with that email is already registered");
                console.log('error');
            }


            }
            catch(error) {
                setDupUserMsg(" Sorry,a user with that email is already registered");
                console.log('could not signup/store-user');
                console.log(error);
                   }
        }

        if( !signUpStatus) {
        return (
            <>

            <h1 className="text-center my-5">Create Your Account</h1>
            <div className='row'>
                <div className="col-sm-6 offset-3">

                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name"
                     onChange={(e) => changeHandler(e)} id="name"
                      className="form-control" placeholder="" 
                      aria-describedby="helpId" required/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">email</label>
                    <input type="email" name="email"
                     onChange={(e) => changeHandler(e)} id="email" 
                     className="form-control" placeholder=""
                      aria-describedby="helpId" required/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="text" name="password" 
                    onChange={(e) => changeHandler(e)} id="password" 
                    className="form-control" placeholder=""
                     aria-describedby="helpId" required/>
                    </div>
                    <p class="form-text text-muted">
                     Cannot signup unless all the fields are filled in
                    </p>
                <input name="" id="" onClick={(e) => clickHandler(e)} className="btn btn-warning mt-2 w-100 fw-semibold" type="button" value="Signup"
                disabled = {!(signUpObj.name) || !(signUpObj.email) || !(signUpObj.password)}/>

                <h4 className="px-5 py-2 text-danger"> {dupeUserMsg} </h4>
                </form>
                </div>
            </div>

            </>
        );
        }
        else {
           return (<div className='row mb-4 text-success'>
           <div className="col-sm-6 offset-3">
          <p className="text-center display-4">  Congratulations  {signUpObj.firstName} {signUpObj.lastName}!</p>
           <p className="text-center lead">You are now registered with
           Real Grande! </p>
           <p className="text-center lead">Go ahead and login now so you make some inquiries</p>
     
           </div>
            </div>
            
            
            );
        }
    }
   
    export default SignUp;

