const LetterBox = ({row, col, num, char, onChangeValue}) => {
  return (
    <div className='char'>
    <input type="text" id="tentacles" name="tentacles" onChange={(e)=> {onChangeValue(row, col, e)}} value={char}/>
    { num && <p className="number">{num}</p>}
      <style jsx>{`
      .char {
        border: 1px solid black;
        width: 7.5vw;
        min-height: 7vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: .5vw;
      }
      input {
        width: 80%;
        height: 55%;
        text-align: center;
        padding-bottom: 25%;
        text-transform: uppercase;
      }
      .wrong {
        color: red;
      }
      .correct {
        color: green;
      }
      .number {
        position: absolute;
        top: 5px;
        left: 2px;
        font-size: .7rem;
      }
    `}</style>
    </div>
  )
}
export default LetterBox;