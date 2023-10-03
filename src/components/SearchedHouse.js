import { useParams } from "react-router-dom";
import House from "./House";

const SearchedHouse = (props) => {

    let paramObj=useParams();
    console.log(paramObj);//has the house id
    console.log(props);
    //get the house with the id from the paramObj,
    //id from paramObj must be equal to _id in Houses array
    // let searchedHouseObjArray= props.houses.filter((house)=>house._id==paramObj.id)
    // console.log(searchedHouseObjArray);


    //this returns single object
    let searchedHouseObj= props.houses.find((house)=>house._id==paramObj.id)
    console.log(searchedHouseObj);
   
    if (!props) {
        console.log(props);
        return <p>Loading...</p>;
      }


    return (
        
        <div>
        <h1>Searched House</h1>
            <House houseinfo={searchedHouseObj}/> 
        </div>
     );
     //House becomes HOC(Higher Order Component)
}
 
export default SearchedHouse;