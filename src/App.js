
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import { Route, Routes } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  let [housesData, setHousesData] = useState([]);// initialize to empty array
  // const [loading, setLoading] = useState(true);//Add loading state
  //to read house.json and send one house obj to House.js
  useEffect(()=>{
    console.log('in useeffect');
    const fetchData = async()=>{
      let resp = await fetch ('/houses.json');
      let data = await resp.json();
      // console.log('data from json-');
      console.log(data);
      setHousesData(data);
      // setLoading(false);//setLoading(false) after fetching data
      // console.log('data from state');
      console.log(housesData);
      //write the data to the state so we can use it anywhere in the component
    };
    fetchData();
   //Set loading to false after data is fetched
  },[]);



  // if(loading) {
  //   return <p>Loading...</p>
  // }

  return (
    
    <div className='container-fluid' >

    <Header/>
    <SearchFilter houses={housesData}/>
    <Routes>
      <Route path='/' element={<House houseinfo={housesData[1]}/>}/>
      <Route path='/searchresults/:county' element={<SearchResults houses={housesData}/>}/>
      <Route path='/searchedHouse/:id' element={<SearchedHouse  houses={housesData}/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>

    {/* {housesData && <House houseinfo={housesData[0]} />} */}
    {/* <House houseinfo={housesData[1]}/> */}

    <Footer/>
      
    </div>
    
  );
}

export default App;

