import React, { Component } from "react";
import Header from "./components/Header";
import faces from "./images.json";
import Images from "./components/images";
import Wrapper from "./components/wrapper";

console.log(faces);
class App extends Component{
  state = {
    //duplicating array
    facesArr: faces,
    score: 0,
    TopScore: 0
  };

  shuffleArray = () => {
    let array = this.state.facesArr;
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Shuffled");
    this.setState({facesArr:array});
}
handleClicked = (event) =>{
  const targetIndx = event.target.id;
  if(this.state.facesArr[targetIndx].clicked===false){
    const newScore = this.state.score+1;
    this.setState({score: newScore});
    console.log("TopScore: " + this.state.TopScore);

    if(newScore> this.state.TopScore){
      this.setState({TopScore:newScore});
    }
    this.faceClick(targetIndx);
  }
  else{
      this.gameOver();
  }

}
gameOver = () => {
  this.setState({score:0});
  const array = this.state.facesArr;
  for (let i = 0; i<array.length; i++){
    array[i].clicked = false;
  }
  this.setState({facesArr: array});
  
  console.log("game over");
  this.shuffleArray();
}
faceClick = (x) =>{
  const array = this.state.facesArr;
  array[x].clicked = true;
  
  this.setState({facesArr: array});
  console.log(this.state.facesArr);
  
  
  this.shuffleArray();
}
render() {
  
  return(
    
    <Wrapper>
    <div className="container">
    <Header
      score = {this.state.score}
      TopScore = {this.state.TopScore}
    />
    {faces.map((faces,index) =>(
    <Images
      name = {faces.name}
      key = {index}
      image = {faces.image}
      index = {index}
      handleClicked={this.handleClicked}
    />
  
    ))}
  </div>
  </Wrapper>
);
}
}
export default App;
