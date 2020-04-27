import React from 'react';
import PreviousNumber from './PreviousNumber';
import EmptyNumber from './EmptyNumber';

export default class SudokuComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      temp: this.props.completed.map((arr) => arr.slice()),
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
  
  checkSudoku = () => {
    let finalResult = true;
    let gameOver = true;
    for(var row = 0; row < 9; row++){
      for(var col = 0; col < 9; col++){
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

  render(){
    const {gameOver, finalResult, temp, check} = this.state;
    const {start, completed} = this.props;
    return (
      <div className="container">
        <div className="sudoku">
          {start.map((item, row) =>
            <div className="line">
            {item.map((number, col) =>
              number != '' ? <PreviousNumber col={col} row={row} number={number} /> : <EmptyNumber checking={check} onChangeValue={this.onChangeValue} row={row} col={col} number={temp[row][col]} correctNumber={completed[row][col]} />
            )}
            </div>
          )}
        </div>
        <button onClick={this.checkSudoku}>Comprobar</button>
        <p>{gameOver && 'Juego Finalizado'}{gameOver && finalResult ? 'Has Ganado' : 'Tienes errores pringao'}</p>
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
