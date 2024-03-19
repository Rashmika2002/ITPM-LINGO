

//Navigation bar
import Navbar from './component/Navbar/Navbar';
//Footer
import Footer from './component/Footer/Footer';
import './component/Footer/FooterApp.css';
//import './App.css';

// emoji to text translater
//import Header from './component/Navbar/Header';
import Addemoji from './component/EmojiText/Addemoji';
import EmojiText from './component/EmojiText/EmojiText';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
// import DiscussionForum from './component/DiscussionForum/DiscussionForum';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        { <Navbar /> }
        <Routes>
          <Route path='/addEmoji' element={<Addemoji />} />
          <Route path='/emojiText' element={<EmojiText />} />
        <Routes>
          {/* {emoji to text translater} */}
          {/* Commenting out the route for AllEmojiText */}
          {/* <Route path='/' element={<AllEmojiText />} /> */}
          {/* <Route path='/Discussion_Forum' element={<DiscussionForum/>}/> */}
          <Route path='/add' element={<Addemoji />} />
          <Route path='emojiText' element={<EmojiText />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
