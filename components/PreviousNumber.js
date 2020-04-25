const PreviousNumber = ({number}) => {
  return (
    <div className="num">
      <input disabled type="number" value={number} />
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
        height: 80%;
      }
    `}</style>
    </div>
  )
}
export default PreviousNumber;