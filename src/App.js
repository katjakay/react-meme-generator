import './Styles.css';
import MemeGenerator from './MemeGenerator';

export default function App() {
  return (
    <div className="body">
      <h1 className="headline"> Meme Generator </h1>
      <p>
        Creating your personalized meme is easy! Fill in the fields for Top and
        Bottom text & click generate. Search for your template and see what
        happens:
      </p>

      <div className="App">
        <MemeGenerator />
      </div>
    </div>
  );
}
