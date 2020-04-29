const LetterPlace = ({letter}) => {
  const classChar = letter.correct ? 'correct char' : 'char';

  return (
    <div className={classChar}>
    <p className="letter">{letter.value}</p>
      <style jsx>{`
      .char {
        border: 1px solid black;
      }
      .letter {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7vw;
        min-height: 7vw;
        margin: 0;
      }
      .correct {
        background: green;
      }
    `}</style>
    </div>
  )
}
export default LetterPlace;