// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
import {Outlet} from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";
import FetchItems from '../components/FetchItems';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../components/LoadingSpinner';
// import fetchStatus from '../store/fetchStatus';
// import HomeItem from "../components/HomeItem";
// import itemImage from "./images/1.jpg";

function App() {

  const fetchStatus = useSelector((store)=> store.fetchStatus)
  return (
    <>
      <Header></Header>
      <FetchItems/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>: <Outlet/>}
      <Footer />
    </>
  );
}

export default App;
