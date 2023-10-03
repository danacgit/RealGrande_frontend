import { useState } from "react";


const Login = () => {
let [formObj,setFormObj] = useState({email:'',password:''});


let changeHandler= (e) => {
    //console.log(e.target.value);
    setFormObj(e.target.value);
    setFormObj({...formObj,[e.target.name]:e.target.value});
    //console.log(formObj);
}


let clickHandler = () => {    
    console.log(formObj);
}
    return (  
        <div className="row">
            <div className="col-sm-6 offset-3">
            <form>
                <div className="mb-3">
                <label for="" className="form-label">Email</label>
                <input type="email" onChange={(e)=>changeHandler(e)} name="email" id="email" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"> your email address</small>
                </div>


                <div className="mb-3">
                <label for="" className="form-label">Password</label>
                <input type="text" onChange={(e)=>changeHandler(e)} name="password" id="password" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Your password</small>
                </div>


                <button type="submit" onClick={clickHandler} className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
    );
}
 
export default Login;
