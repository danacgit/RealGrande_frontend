import { useState } from "react";


    const SignUp = () => {


        let [signUpObj,setSignupObj] = useState({name:'',email:'',password:''});


        let changeHandler = (e) => {
            setSignupObj({...signUpObj,[e.target.name]:e.target.value});
            console.log(signUpObj);
            
        }


        let clickHandler = (e) =>{
            e.preventDefault();
            console.log(signUpObj);
        }


        return (
            <div className='row'>
                <div className="col-sm-6 offset-3">
                <form>
                    <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" name="name" onChange={(e) => changeHandler(e)} id="name" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="mb-3">
                    <label for="email" className="form-label">email</label>
                    <input type="email" name="email" onChange={(e) => changeHandler(e)} id="email" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div className="mb-3">
                    <label for="password" className="form-label">password</label>
                    <input type="text" name="password" onChange={(e) => changeHandler(e)} id="password" className="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <button type="submit" onClick={(e) => clickHandler(e)}  className="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
        );
    }
   




    export default SignUp;



