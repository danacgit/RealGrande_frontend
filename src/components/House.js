const House = (props) => {

    if (!props.houseinfo) {
        return <p>Loading...</p>;
      }

    console.log(props);
    return (
        <>
     <div className="row">
        <div className="col-sm-6">
           <b>{props.houseinfo.address}</b>
           {/* <b>{address</b> */}

        </div>

        <div className="col-sm-6">
           <b>Price: USD {props.houseinfo.price}</b>
           {/* <b>Price: USD price</b> */}

        </div>

    </div> 

    <div className="row">
        <div className="col-sm-6">
           <img className="img-fluid" src={'/imgs/'+ props.houseinfo.photo} alt="house"/>

        </div>

        <div className="col-sm-6">
           <p>{props.houseinfo.description}</p>
           {/* <p>description</p> */}

        </div>

    </div>


    </> );
}
 
export default House;