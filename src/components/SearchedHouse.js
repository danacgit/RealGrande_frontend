
import { useParams } from "react-router-dom";
import House from "./House";
import Enquiry from "./Enquiry";


const SearchedHouse = (props) => {
     
    //hooks have to be at the top
     let paramsObj = useParams();
     console.log(paramsObj);
     console.log(props);
 
     //find will return the first element in the iterable object that meets the parameters
     let findHouseObj = props.houses.find((house) => house._id == paramsObj.id);
     //console.log(findHouseObj);


     if(!findHouseObj) {
        // no match found
    return <p>House not found</p>; 
}
 
 
     if (!props.houses) {
         return <p>Loading...</p>;
     }
 
     return (<>
     <h1>Searched House</h1>


    <div className="row">
        <div className="col-sm-6">
            <b>{findHouseObj.address}</b>  
            </div>
        <div className="col-sm-6">
           <b>Price: USD {findHouseObj.price}</b>
        </div>
    </div>


    <div className="row">
        <div className="col-sm-6">
           <img className="img-fluid" src={'/imgs/'+ findHouseObj.photo} alt="house"/>
       </div>
        <div className="col-sm-6">
           <p>{findHouseObj.description}</p>  
          {  (sessionStorage.getItem('custname')) && <Enquiry /> }
        </div>
    </div>
         
     </>);
}
 
export default SearchedHouse;









// import { useParams } from "react-router-dom";
// import House from "./House";
// import Enquiry from "./Enquiry";

// const SearchedHouse = (props) => {

//      //hooks have to be at the top
//     let paramObj=useParams();
//     console.log(paramObj);//has the house id
//     console.log(props);
//     //get the house with the id from the paramObj,
//     //id from paramObj must be equal to _id in Houses array
//     // let searchedHouseObjArray= props.houses.filter((house)=>house._id==paramObj.id)
//     // console.log(searchedHouseObjArray);


//     //this returns single object
//  //find will return the first element in the iterable object that meets the parameters
//     // let searchedHouseObj= props.houses.find((house)=>house._id==paramObj.id)
//     // console.log(searchedHouseObj);

//     let findHouseObj = props.houses.find((house) => house._id == paramObj.id);
//     console.log(findHouseObj);
   
//     if (!props) {
//         console.log(props);
//         return <p>Loading...</p>;
//       }


//     return (
        
//         <div>
//         <h1>Searched House</h1>
//             {/* <House houseinfo={searchedHouseObj}/>  */}
//             <Enquiry/>
//         </div>
//      );
//      //House becomes HOC(Higher Order Component)
// }
 
// export default SearchedHouse;