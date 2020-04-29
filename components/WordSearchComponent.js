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

  outOfBounds = (x, y, long, direction) => {
    return ((x + (long * direction.x)) >= 0 && y + (long * direction.y) >= 0 && x + (long * direction.x) < 30 && y + (long * direction.y) < 30) ? false : true;
  }

  floriponcia = ( word ) => {
    const directions = [{x:-1,y:0},{x:1,y:0},{x:0,y:-1},{x:0,y:1},{x:-1,y:-1},{x:1,y:1},{x:1,y:-1},{x:-1,y:1}];
    const long = word.length;
    let pos = [...Array(long)];
    let find = false;

    this.state.temp.map((row, y) => {
      row.map((col, x) => {
        if (col.value === word[0]){
          directions.map(direction => {
            if (!find && !this.outOfBounds(x,y,long -1, direction)) {
              for(var i = 1; i <= long ; i++) {
                console.log('aqui',word.substring(i - 1, i), i);
                find = word.substring(i - 1, i) === this.state.temp[y + (i * direction.y)][x + (i * direction.x)].value;
                pos[i -1] = {x: x + (i * direction.x), y: y + (i * direction.y)};
                if (!find) break;
              };
            }
          });
        }
      });
    });

    if (find) {
      pos.map(o =>{
        let newArr = [...this.state.temp];
        newArr[o.y][o.x].correct = 1;
        this.setState({
          temp: newArr,
          check: false,
        });
      });
    } else {
      console.log('not find the word');
    }
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
