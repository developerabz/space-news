const Buttons = ({ handlePrev, handleNext, iterate }) => {
  return (
    <div class="buttons">
      {iterate.previous && <button onClick={handlePrev}>Prev</button>}
      {iterate.next && <button onClick={handleNext}>Next</button>}
    </div>
  )
}

export default Buttons;
