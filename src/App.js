// Import all dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import units from "./units.json";
import './App.css';


// Sets state to either 0 or empty
class App extends Component {
  state = {
    units,
    clickedUnit: [],
    score: 0
  };

  gameWin = () => {
    alert("The Queen is pleased! You win! ");
    this.resetGame();
  };

  resetGame = () => {
    this.setState({
      units: this.state.units.sort(function (a, b) {
        return 0.5 - Math.random();
      }),
      clickedUnit: [],
      score: 0
    });
  };

  //when you click on a card ... the zerg unit is taken out of the array
  imageClick = event => {
    const currentUnit = event.target.alt;
    const UnitsAlreadyClicked = this.state.clickedUnit.indexOf(currentUnit) > -1;
 
    //if you click on a zerg unit that has already been selected, the game is reset and cards reordered
    if (UnitsAlreadyClicked) {
      this.resetGame();
      alert("You lose. Play again?");
      //if you click on an available zerg unit, your score is increased and cards reordered
    } else {
      if (this.state.score === 11) {
        this.gameWin();
      } else {
        this.setState({
          units: this.state.units.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          // When you click a new unit, it adds it to the clickedUnit Array. 
          clickedUnit: this.state.clickedUnit.concat(currentUnit),
          score: this.state.score + 1
        });
      }
    };
  }


  render() {
    return (
      <div className="bg">
        <Navbar
          score={this.state.score}
        />
        <Header />
        <div className="wrapper">
          {this.state.units.map(unit => (
            <Container
              imageClick={this.imageClick}
              id={unit.id}
              key={unit.id}
              name={unit.name}
              image={unit.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
