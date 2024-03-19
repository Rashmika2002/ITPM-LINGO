//Navigation bar
import Navbar from './component/Navbar/Navbar';
//Footer
import Footer from './component/Footer/Footer';
import './component/Footer/FooterApp.css';


<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Profile from './component/Profile/Profile';
import UpdateUser from './component/UpdateUser/UpdateUser';
//import Header from './component/Navbar/Header';
import AllEmojiText from './component/EmojiText/AllEmojiText';

import './App.css';


=======
>>>>>>> c3ba00e201165996656c7e24cc60115e3936b39b
// emoji to text translater
import Addemoji from './component/EmojiText/Addemoji';
// import { AllEmojiText } from './component/EmojiText/AllEmojiText';
import EmojiText from './component/EmojiText/EmojiText';

function App() {
  return (
    <Router>
      <div>
        { <Navbar /> }
<<<<<<< HEAD

        <Routes>
          {/*emoji to text translater*/}
        {/*  <Route path="/add" element={<Addemoji />} />
          <Route path="/" element={<AllEmojiText />} />
          <Route path="/emojiText" element={<EmojiText />} />
        */}
       
          {/*User Authentication*/}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateUser />} />

        {/* { <Header /> } */}

=======
        <Routes>
>>>>>>> c3ba00e201165996656c7e24cc60115e3936b39b
          {/* {emoji to text translater} */}
          {/* Commenting out the route for AllEmojiText */}
          {/* <Route path='/' element={<AllEmojiText />} /> */}
          
          <Route path='/add' element={<Addemoji />} />
          <Route path='emojiText' element={<EmojiText />} />
        </Routes>
      </div>
      {<Footer/>}

    </Router>
  );
}

export default App;
