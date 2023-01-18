import React, { useState } from 'react';

export default function ExampleEvents() {
  const [meme, setMeme] = useState('Meme');
  return (
    <>
      <h1>Meme Generator</h1>
      <input
        value=""
        onChange={(event) => {
          // The current value of the text in the input
          console.log('event.currentTarget.value', event.currentTarget.value);
          setMeme(event.currentTarget.value);
        }}
      />
      Top text
      <input
        value=""
        onChange={(event) => {
          // The current value of the text in the input
          console.log('event.currentTarget.value', event.currentTarget.value);
          setMeme(event.currentTarget.value);
        }}
      />
      Bottom text
    </>
  );
}
