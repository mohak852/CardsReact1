import React,{useState,useEffect} from 'react';
import {Container ,Row,Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import Axios from "axios";
import './styles/app.css';
import "./App.css"
import MyCard from "./Card"
import NavBar from './Navbar';
function App() {
  const [details,setDetails] = useState({});
  const fetchDetails = async ()=>{
  const {data} = await Axios.get('https://randomuser.me/api/');
  console.log(data);
  
  const details = data.results[0]
  console.log("Deatils: " + details);
  setDetails(details);
  }
  useEffect(() => {
    fetchDetails();
  }, [])

  
  return (
    <div className="App">
      <NavBar/>
      <MyCard details={details} />
    </div>
  );
}

export default App;
