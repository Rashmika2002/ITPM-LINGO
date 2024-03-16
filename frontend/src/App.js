// import './App.css';
// import SpeechRecognition,{ useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from 'react-use-clipboard';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

//  function App() {
//   const url = 'https://text-translator2.p.rapidapi.com/translate';

//   const [textToCopy, setTextToCopy] = useState('');
//   const [isCopied, setCopied] = useClipboard(textToCopy, { successDuration: 2000 });
//   const [translatedText, setTranslatedText] = useState('');
//   const [isTranslating, setIsTranslating] = useState(false);

//   const startListening = () => SpeechRecognition.startListening({ continuous: true });
//   const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

//   useEffect(() => {
//     if (!browserSupportsSpeechRecognition) {
//       return;
//     }

//     if (transcript !== '') {
//       setTextToCopy(transcript);
//       if (!isTranslating) {
//         translateText(transcript);
//       }
//     }
//   }, [transcript, browserSupportsSpeechRecognition, isTranslating]);

//   const translateText = async (text) => {
//     setIsTranslating(true);
//     try {
//       const response = await axios.post( { text }, {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
//           'x-rapidapi-key': '00f29c1c3bmshd515bf100b3266ep169baajsnd4ea99725296', // Replace with your API key
//         },
//         body: new URLSearchParams({
//           source_language: 'en',
//           target_language: 'id',
//           text: 'What is your name?'
//         })
//       });

//       // Assuming response.data is the translated text
//       setTranslatedText(response.data);
//     } catch (error) {
//       console.error('Translation error:', error);
//     } finally {
//       setIsTranslating(false);
//     }
//   };

//   const handleTranslateClick = () => {
//     if (textToCopy !== '') {
//       translateText(textToCopy);
//     }
//   };

//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <>
//       {/* interface */}
//       <div className='container'>
//         <h2>Speech to Text Translator</h2>
//         <br />
//         <p>A react hook that converts speech</p>
//         <br />
//         <div className='main-content' onClick={() => setTextToCopy(transcript)}>
//           {transcript}
//         </div>
//         <div className='btn-style'>
//           <button onClick={setCopied}>
//             {isCopied ? "Copied!" : "Copy to clipboard"}
//           </button>
//           <button onClick={startListening}>Start Listening</button>
//           <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
//           <button onClick={handleTranslateClick} disabled={isTranslating}>
//             Translate
//           </button>
//         </div>
//         {translatedText && (
//           <div className='translated-text'>
//             <h3>Translated Text</h3>
//             <p>{translatedText}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );

// }

// export default App;

import axios from 'axios';

async function App(){

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', 'en');
encodedParams.set('target_language', 'id');
encodedParams.set('text', 'What is your name?');

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '00f29c1c3bmshd515bf100b3266ep169baajsnd4ea99725296',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

	const response = await axios.request(options);
	console.log(response.data);

}
export default App;