const EmptyNumber = ({row, col, onChangeValue}) => {
  return (
    <div className="num">
    <input onChange={(e)=> {onChangeValue(row, col, e)}} type="number" id="tentacles" name="tentacles" min="1" max="9"/>
    <p>{row+' '+ col}</p>
      <style jsx>{`
      .num {
        border: 1px solid black;
        width: 11vw;
        min-height: 11vw;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input {
        width: 80%;
        height:80%;
      }
    `}</style>
    </div>
  )
}
export default EmptyNumber;