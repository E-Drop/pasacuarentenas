import React from 'react';
import PreviousNumber from '../components/PreviousNumber';
import EmptyNumber from '../components/EmptyNumber';

const start = [['',8,'',5,7,6,2,'',''],['','','',4,'',2,'','',''],['','','','',3,9,5,4,8],[6,3,'',9,'','',8,5,2],['',9,'',2,'','',3,7,''],[8,'','','',5,'',6,9,4],[2,5,7,6,'',3,4,8,9],[3,'',8,7,'','','',2,5],['',4,'','','','','','',6]],
const completed = [[9,8,4,5,7,6,2,1,3],[5,1,3,4,8,2,9,6,7],[7,2,6,1,3,9,5,4,8],[6,3,1,9,4,7,8,5,2],[4,9,5,2,6,8,3,7,1],[8,7,2,3,5,1,6,9,4],[2,5,7,6,1,3,4,8,9],[3,6,8,7,9,4,1,2,5],[1,4,9,8,2,5,7,3,6]],

export default class Sudoku extends React.Component{

  componentDidMount(){
   this.setState({
     temp: start,
   })
  }
  onChangeValue =(row, col, event) => {
    let newArr = this.state.temp;
    newArr[row][col] = event.target.value;
    this.setState({
      temp: newArr,
    });
    console.log(this.state.temp);
  }
  render(){
    console.log('RENDER');
    return (
      <div className="container">
        <h1>Sudoku #1</h1>
        <div className="sudoku">
          {this.state.start.map((item, row) =>
            <div className="line">
            {item.map((number, col) =>
              number != '' ? <PreviousNumber number={number} /> : <EmptyNumber onChangeValue={this.onChangeValue} row={row} col={col} />
            )}
            </div>
          )}
        </div>

        <style jsx>{`
          .sudoku {
            border: 3px solid black;
            height: 80vh;
          }
          .line{
            display: flex;
          }
          .num {
            border: 1px solid black;
            width: 11vw;
            min-height: 11vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          input {
            width: 11vw!important;
          }
        `}</style>
      </div>
    )
  }
};
