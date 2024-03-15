// import './App.css';
// import SpeechRecognition,{ useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from 'react-use-clipboard';
// import {useEffect, useState} from 'react';
// import axios from 'axios';

// const url = 'https://microsoft-translator-text.p.rapidapi.com/BreakSentence?api-version=3.0';

// function App() {

//   const [textToCopy,setTextToCopy] = useState();
//   const [isCopied,setCopied] = useClipboard(textToCopy,{successDuration:1000});

// const startListening = ()=> SpeechRecognition.startListening({continuous:true});//si-LK
// const {transcript,browserSupportsSpeechRecognition} = useSpeechRecognition();
  


// if (!browserSupportsSpeechRecognition){
//   return null
// }

//  return (
//   <>
    
//       {/* interface */}
//       <div className='container'>
//         <h2>Speech to Text Translator</h2>
//         <br/>
//         <p>A react hook that converts speech</p>
//         <br></br>
//         <div className='main-content' onClick={()=>setTextToCopy(transcript)}>
//             {transcript}
//         </div>
//         <div className='btn-style'>
          
//           <button onClick={setCopied}>
//              {isCopied ? "Copied!" :"Copy to clipboard"}
//            </button>
          
//           <button onClick={startListening}>Start Listening</button>
//           <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>


//         </div>
//       </div>
   
//     </>
//   );
// }


<html>
    <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" conten="IE-edge"></meta>
        <meta name="viewport" conten="width=device-widthinitial-scale=1.0"></meta>
        <title>Document</title>
    </head>
<body>
    <h1>Tect translator</h1>
    <form action="/translate" method="POST">
        <textarea name="text" placeholder="Enter text" required>
        </textarea>
    </form>
</body>
</html>
