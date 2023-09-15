import React from 'react';

export default function MemeForm({
  topText,
  bottomText,
  memeTemplateText,
  setTopText,
  setBottomText,
  setMemeTemplateText,
  setDisplayedMeme,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Top text
        <input
          value={topText}
          onChange={(e) => setTopText(e.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        Bottom text
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        Meme template
        <input
          value={memeTemplateText}
          onChange={(e) => setMemeTemplateText(e.currentTarget.value)}
        />
      </label>
      <br />
      <button
        data-test-id="generate-meme"
        onClick={() =>
          setDisplayedMeme(
            `https://api.memegen.link/images${
              memeTemplateText ? `/${memeTemplateText}` : ''
            }${topText ? `/${topText}` : ''}${
              topText && bottomText ? `/${bottomText}` : ''
            }${bottomText && !topText ? `/ /${bottomText}` : ''}`,
          )
        }
      >
        Generate
      </button>
    </form>
  );
}
