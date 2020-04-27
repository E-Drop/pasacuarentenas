const PreviousNumber = ({number, row, col}) => {
  const isThirdRow = (row+1) % 3 === 0 && (row+1) != 9  ? true : false;
  const isThirdCol = (col+1) % 3 === 0 && (row+1) != 9  ? true : false;
  const classNAMES = isThirdRow && isThirdCol ? 'col3 row3 num' : isThirdRow ? 'row3 num': isThirdCol ? 'col3 num': 'num'; 
  return (
    <div className={classNAMES}>
      <input  disabled type="number" value={number} />
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
        height: 80%;
        text-align: center;
      }
    `}</style>
    </div>
  )
}
export default PreviousNumber;