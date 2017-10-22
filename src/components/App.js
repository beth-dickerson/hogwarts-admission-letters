import React from 'react';
import AcceptanceLetterText from './AcceptanceLetterText';
import RejectionLetterText from './RejectionLetterText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Hint: Use this to keep track of whether the user has checked/unchecked the box
      checked: false
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  };

  handleCheckboxChange(event) {
    // Write code to update the letter state here!
    // Hint: Where and how are you going to use this function?
    event.preventDefault();
    this.setState({
      checked: event.target.value
    })
  }

  render() {
    let finalLetter;
    if (this.state.checked) {
      finalLetter = <RejectionLetterText />
    } else {
      finalLetter = <AcceptanceLetterText />
    }

    return (
      <div>
        <div className="letter-body">
          <div className="small-12 small-centered text-center columns">
            <input type="checkbox" onChange={this.handleCheckboxChange} />
            <label>
              <h5>Rejected?</h5>
            </label>
        </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" id="hogwarts-logo"/>
          <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
          <br />
          <h3 id="headmaster-name">Headmaster: Albus Dumbledore</h3>
          <p id="merlin-order">
            (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)
          </p>
          <br />
          <p>Dear Addressee,</p>
          <div>
            {finalLetter}
            // You'll need to change this to show either the AcceptanceLetterText or RejectionLetterText when the user toggles the checkbox!
          </div>
          <br />
          <p>Yours sincerely,</p>
          <h3>Minerva McGonagall</h3>
          <h3>Deputy Headmistress</h3>
        </div>
      </div>
    );
  };
};

export default App;
