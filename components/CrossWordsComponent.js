import React from 'react';
import LetterBox from './LetterBox';
import EmptyPlace from './EmptyPlace';

export default class CrossWordsComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      temp: this.props.completed.forEach( i => { return i.value ? i.value = '' : i }),
      check: false,
      gameOver: false,
      finalResult: false,
    };
  }
  
  onChangeValue =(row, col, event) => {
    let newArr = [...this.state.temp];
    newArr[row][col] = event.target.value;
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
    const {gameOver, finalResult} = this.state;
    const {completed} = this.props;
    return (
      <div className="container">
        <div className="sudoku">
          {completed.map((item, row) =>
            <div className="line">
            {item.map((letter, col) =>
              letter.value ? letter.number ? <LetterBox col={col} row={row} num={letter.number} /> : <LetterBox col={col} row={row} /> : <EmptyPlace/>
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
