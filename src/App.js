import { useState } from 'react';

export default function App() {
  const [templates, setTemplates] = useState([]);

  // 1. Set the meme template by requesting access to API of website link -> GET
 useEffect(() => {
    fetch('https://memegen.link/').then(x =>
    x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);

  // 2. Looop over the images and display images
  return <div style={{ textAlign: "center"}}>
    {templates.map(template => {
      return <img key={template.id} src={template.url} alt={template.name} />;
       })}
  </div>
}}