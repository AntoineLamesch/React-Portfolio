import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import SignInScreen  from './components/SignInScreen';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

function App(){
 
    return (

      ReactDOM.render(
        <Router>
        <Header resumeData={resumeData}/>
        <Routes>
          <Route path="/" element={<About resumeData={resumeData}/>}>
          <Route path="/SignInScreen" element={<SignInScreen />} />
          </Route>
        </Routes>
        <SignInScreen></SignInScreen>
        <Footer resumeData ={resumeData}/>
        </Router>,
        document.getElementById('root')
      )
    );
  }

export default App;