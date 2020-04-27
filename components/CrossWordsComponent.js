import React from 'react';
import LetterBox from './LetterBox';
import EmptyPlace from './EmptyPlace';

export default class CrossWordsComponent extends React.Component{
  constructor(props) {
    super(props);
    const temporal = this.props.completed.map((arr) => arr.map(t => ({...t})));
    temporal.map(i =>
      i.map( t => {
        if(t.value) {
          t.value = '';
        }
        return t;
      })
    );
    this.state= {
      temp: temporal,
      check: false,
      gameOver: false,
      finalResult: false,
    };
  }
  
  onChangeValue =(row, col, event) => {
    let newArr = [...this.state.temp];
    newArr[row][col].value = event.target.value;
    console.log(newArr[row][col].value);
    this.setState({
      temp: newArr,
      check: false,
    });
  }
  
  checkGame = () => {
    let finalResult = true;
    let gameOver = true;
    for(var row = 0; row < 13; row++){
      for(var col = 0; col < 13; col++){
        gameOver = gameOver ? this.state.temp[row][col] === '' ? false : true : false;
        finalResult = finalResult ? this.state.temp [row][col] === completed[row][col] ? true : false : false;
      }
    };
    this.setState({
      check: true,
      finalResult: finalResult,
      gameOver: gameOver,
    });
  }

  render() {
    const {gameOver, finalResult, temp} = this.state;
    return (
      <div className="container">
        <div className="sudoku">
          {temp.map((item, row) =>
            <div className="line">
            {item.map((letter, col) => 
              letter.value !== undefined ? letter.number ? <LetterBox col={col} onChangeValue={this.onChangeValue} row={row} num={letter.number} char={letter.value} /> : <LetterBox  onChangeValue={this.onChangeValue} col={col} row={row} char={letter.value} /> : <EmptyPlace/>
            )}
            </div>
          )}
        </div>
        <button onClick={this.checkSudoku}>Comprobar</button>
        <p>{gameOver && 'Juego Finalizado'}{gameOver ? finalResult ? 'Has Ganado' : 'Tienes errores pringao' : ''}</p>
        <style jsx>{`
          .sudoku {
            border: 3px solid black;
          }
          .line{
            display: flex;
          }
        `}</style>
      </div>
    )
  }
};
