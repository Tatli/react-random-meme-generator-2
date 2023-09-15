import { useState } from 'react';
import DownloadButton from './DownloadButton';
import MemeForm from './MemeForm';
import Preview from './Preview';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeTemplateText, setMemeTemplateText] = useState('');
  const [displayedMeme, setDisplayedMeme] = useState(
    'https://api.memegen.link/images/yodawg/yo_dawg/I_heard_you_like_memes',
  );

  // const meme = fetch(
  //   'https://api.memegen.link/images/fry/query_parameter/example.png?api_key=myapikey42',
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data){
  //     setDisplayedMeme(data.(what?))
  //   })
  //   .catch((error) => console.error(error));

  return (
    <>
      <h2>Random Meme Generator</h2>

      <Preview
        memeTemplateText={memeTemplateText}
        topText={topText}
        bottomText={bottomText}
      />

      <img
        data-test-id="meme-image"
        src={displayedMeme}
        alt="A generated meme"
      />

      <MemeForm
        memeTemplateText={memeTemplateText}
        topText={topText}
        bottomText={bottomText}
        setBottomText={setBottomText}
        setTopText={setTopText}
        setMemeTemplateText={setMemeTemplateText}
        setDisplayedMeme={setDisplayedMeme}
      />
      <DownloadButton apiUrl={displayedMeme} />
    </>
  );
}
