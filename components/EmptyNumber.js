const EmptyNumber = ({row, col, onChangeValue, number, checking, correctNumber}) => {
  const isThirdRow = (row+1) % 3 === 0 && (row+1) != 9  ? true : false;
  const isThirdCol = (col+1) % 3 === 0 && (row+1) != 9  ? true : false;
  const classNAMES = isThirdRow && isThirdCol ? 'num col3 row3' : isThirdRow ? 'num row3': isThirdCol ? 'num col3': 'num'; 
  const classNumber = checking ? correctNumber !== number ? 'wrong' : 'correct': '';
  return (
    <div className={classNAMES}>
    <input className={classNumber} onChange={(e)=> {onChangeValue(row, col, e)}} type="number" id="tentacles" name="tentacles" min="1" max="9" value={number}/>
      <style jsx>{`
      .num {
        border: 1px solid black;
        width: 11vw;
        min-height: 11vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .row3 {
        border-bottom: 3px solid black !important;
      }
      .col3 {
        border-right: 3px solid black !important;
      }
      input {
        width: 80%;
        height:80%;
        text-align: center;
      }
      .wrong {
        color: red;
      }
      .correct {
        color: green;
      }
    `}</style>
    </div>
  )
}
export default EmptyNumber;