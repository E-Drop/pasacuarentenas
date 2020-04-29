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
  
  checkGame = () => {
    
  }

  floriponcia = ( word ) => {
    const places = [{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1},{x:-1,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1}];
    this.state.temp.map((row, y) => {
      row.map((col, x) => {
        console.log('asdasd ',col.value);
        if (col.value === word.substring(0, 1)){
          places.map(func => {
            const k = word.length - 1;
            if (k * func.x >= 0 && k * func.y >= 0 && k * func.x < 29 && k * func.y < 29) {
              var find = true;
              for(var i = 1; i < word.length ; i++) {
                console.log(y + (i *func.y),x + (i *func.x));
                find = word.substring(i,1) === this.state.temp[y + (i *func.y)][x + (i *func.x)];
                if (!find) break;
              };
              if (find) {
                return true;
              }
            }
          });
        }
      });
    });
    return false;
  };

  render(){
    const {gameOver, finalResult, temp, check} = this.state;
    return (
      <div className="container">
        <div className="sudoku">
          {temp.map((item, row) =>
            <div className="line">
            {item.map((letter, col) =>
             <LetterPlace letter={letter} />
            )}
            </div>
          )}
        </div>
        <button onClick={()=>{this.floriponcia('ACTUALMENTE')}}>Comprobar</button>
        <p>{gameOver && 'Juego Finalizado'}{gameOver && finalResult ? 'Has Ganado' : 'Tienes errores pringao'}</p>
        <style jsx>{`
          .line{
            display: flex;
          }
        `}</style>
      </div>
    )
  }
};
