import { useNavigate } from "react-router-dom";

const SearchFilter = (props) => {

    let navigate=useNavigate();

    console.log(props);
    //array of distinct counties
   let arr =  props.houses.map((elem)=> elem.county);
       console.log(arr);

     let distinctCounties= Array.from(new Set([...arr]));
     console.log(distinctCounties);
    



    //before return must get render thing need
    //need array of counties
    //array.map and generate the options dynamically

    //synthetic event
    let changeHandler=(e)=>{ 
        console.log('select!'+ e.target.value);
     
        
        navigate(`/searchresults/${e.target.value}`);

    }

    return ( 
       <>
         <div className="row mb-3">
         <div className="text-center">
             <b>Select County:</b>
            <select onChange={(e)=>changeHandler(e)}>
            <option key ="select" value="select"> Select </option>                  
        {distinctCounties.map((county)=> <option key={county} value={county}>
         {county} </option>)}
             
            </select>
            </div>
        </div>

        {/* <div className="rowr">
          <div className="col-sm-2 offset-sm-5">
          <h6>Select county</h6>
          </div>
          <div className="col-sm-5">
            <select>
                <option value="county1">County1</option>
                <option value="county2">County2</option>
                <option value="county3">County3</option>
            </select>
            </div>
         </div> */}
      
        </>
     );
}
 
export default SearchFilter;