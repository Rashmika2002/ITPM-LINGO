<<<<<<< HEAD
import './App.css';
=======
//Navigation bar
import Navbar from './component/Navbar/Navbar';
//Footer
import Footer from './component/Footer/Footer';
import './component/Footer/FooterApp.css';

>>>>>>> feature/heshan.s/emoji-text-translater

// emoji to text translater
//import Header from './component/Navbar/Header';
import Addemoji from './component/EmojiText/Addemoji';
// import { AllEmojiText } from './component/EmojiText/AllEmojiText';
import EmojiText from './component/EmojiText/EmojiText';
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import DiscussionForum from './component/DiscussionForum/DiscussionForum';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Footer from './component/Footer/Footer'
import Profile from './component/Profile/Profile'
import Dashboard from './component/Profile/Dashboard';
=======
>>>>>>> feature/heshan.s/emoji-text-translater

function App() {
  return (
    <Router>
      <div>
<<<<<<< HEAD
=======
        { <Navbar /> }
>>>>>>> feature/heshan.s/emoji-text-translater
        <Routes>
          {/* {emoji to text translater} */}
          {/* Commenting out the route for AllEmojiText */}
          {/* <Route path='/' element={<AllEmojiText />} /> */}
          <Route path='/Discussion_Forum' element={<DiscussionForum/>}/>
          <Route path='/add' element={<Addemoji />} />
          <Route path='emojiText' element={<EmojiText />} />
<<<<<<< HEAD
          
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='profile' element={<Profile/>}/>
          <Route path="/dashboard" component={<Dashboard/>}/>

          <Route path='/footer' element={<Footer />} />          
=======
>>>>>>> feature/heshan.s/emoji-text-translater
        </Routes>
      </div>
    </Router>
  );
}

export default App;
