import './Styles.css';
import React from 'react';

class MemeGenerator extends React.Component {
  state = {
    topText: '',
    bottomText: '',
    memeArray: [],
    randomMeme: '',
  };

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((content) =>
        this.setState({
          memeArray: content.data.memes,
        }),
      );
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { memeArray } = this.state;
    const random = memeArray[Math.floor(Math.random() * memeArray.length)].url;

    this.setState({
      randomMeme: random,
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <label htmlFor="topText">Top text</label>
          <input
            placeholder=""
            type="text"
            value={this.state.topText}
            name="topText"
            onChange={this.handleChange}
          />
          <label htmlFor="bottomText">Bottom text</label>
          <input
            placeholder=""
            type="text"
            value={this.state.bottomText}
            name="bottomText"
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <br />
        <div className="meme">
          {this.state.randomMeme === '' ? (
            ''
          ) : (
            <img
              src={this.state.randomMeme}
              alt="meme"
              data-test-id="meme-image"
            />
          )}
          {this.state.randomMeme === '' ? (
            ''
          ) : (
            <h2 className="top">{this.state.topText}</h2>
          )}
          {this.state.randomMeme === '' ? (
            ''
          ) : (
            <h2 className="bottom">{this.state.bottomText}</h2>
          )}
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
