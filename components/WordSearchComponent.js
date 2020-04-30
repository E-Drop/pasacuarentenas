import React from 'react';
import LetterPlace from './LetterPlace';

export default class WordSearchComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      temp: this.props.completed,
      check: false,
      gameOver: false,
      finalResult: false,
      word: '',
    };
  }
  
  onSubmitWord =(event) => {
    let newArr = [...this.state.temp];
    newArr[row][col] = event.target.value;
    this.setState({
      temp: newArr,
      check: false,
    });
  }

  onChangeValue = (e) => {
    const word = e.target.value.toUpperCase();
    this.setState({
      word: word,
    })
  }

  outOfBounds = (x, y, long, direction) => {
    return ((x + (long * direction.x)) >= 0 && y + (long * direction.y) >= 0 && x + (long * direction.x) < 30 && y + (long * direction.y) < 30) ? false : true;
  }

  floriponcia = () => {
    const { word } = this.state;
    const directions = [{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1},{x:-1,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1}];
    const long = word.length - 1;
    let pos = [...Array(long)];
  
    this.state.temp.map((row, y) => {
      row.map((col, x) => {
        if (col.value === word[0]) {
          directions.map(direction => {
            let find = false;
            if (!this.outOfBounds(x,y,long, direction)) {
              for(var i = 0; i < word.length; i++) {
                find = word.substring(i, i + 1) === this.state.temp[y + (i * direction.y)][x + (i * direction.x)].value;
                pos[i] = {x: x + (i * direction.x), y: y + (i * direction.y)};
                if (!find) break;
              };
              if (find) {
                let newArr = [...this.state.temp];
                pos.map(o => {
                  newArr[o.y][o.x].correct = 1;
                });
                this.setState({
                  temp: newArr,
                });
                return true;
              }
            }
          });
        }
      });
    });
    console.log('not find the word');
    return false;
  };

  render(){
    const {gameOver, finalResult, temp, check} = this.state;
    return (
      <div className="container">
        <div className="sudoku">
          {temp.map((item, row) =>
            <div className="line">
            {item.map((letter) =>
             <LetterPlace letter={letter} />
            )}
            </div>
          )}
        </div>
        <input type="text" name="fname" onChange={(e)=> {this.onChangeValue(e)}}/>  
        <button onClick={this.floriponcia}>Comprobar</button>
        <style jsx>{`
          .line{
            display: flex;
          }
        `}</style>
      </div>
    )
  }
};
