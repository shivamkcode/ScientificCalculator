import React, { useState } from 'react'

const Calculator = () => {
  const [result, setResult] = React.useState('')
  const inputRef = React.useRef(null)

  const handleClick = (e) => {
    if (e.target.name === "sqrt") {
      setResult(Math.sqrt(parseFloat(result)).toString());
    } else if (e.target.name === "pow") {
      setResult(Math.pow(parseFloat(result), 2).toString());
    } else if (e.target.name === "log") {
      setResult(Math.log(parseFloat(result)).toString());
    } else if (e.target.name === "sin") {
      setResult(Math.sin(parseFloat(result)).toString());
    } else if (e.target.name === "cos") {
      setResult(Math.cos(parseFloat(result)).toString());
    } else if (e.target.name === "tan") {
      setResult(Math.tan(parseFloat(result)).toString());
    } else if (e.target.name === "asin") {
      setResult(Math.asin(parseFloat(result)).toString());
    } else if (e.target.name === "acos") {
      setResult(Math.acos(parseFloat(result)).toString());
    } else if (e.target.name === "atan") {
      setResult(Math.atan(parseFloat(result)).toString());
    } else {
      setResult(result.concat(e.target.name));
    }
  }

  const handleInputChange = (e) => {
    setResult(e.target.value)
  }

  const clear = () => {
    setResult('')
  }

  const calculate = (e) => {
    e.preventDefault()

    try {
      setResult(eval(result).toString())
    } catch (err) {
      setResult('Error')
    }
  }

  return (
    <div className="container">
      <form onSubmit={calculate}> 
        <input type="text" value={result} onChange={handleInputChange} ref={inputRef} />
      </form>

      <div className="keypad">
        <button onMouseDown={clear} id="clear">Clear</button>
        <button name="+" onMouseDown={handleClick}>+</button>
        <button name="-" onMouseDown={handleClick}>-</button>
        <button name="*" onMouseDown={handleClick}>*</button>
        <button name="/" onMouseDown={handleClick}>/</button>
        <button name="sqrt" onMouseDown={handleClick}>√</button>
        <button name="pow" onMouseDown={handleClick}>x²</button>
        <button name="log" onMouseDown={handleClick}>log</button>
        <button name="sin" onMouseDown={handleClick}>sin</button>
        <button name="cos" onMouseDown={handleClick}>cos</button>
        <button name="tan" onMouseDown={handleClick}>tan</button>
        <button name="asin" onMouseDown={handleClick}>asin</button>
        <button name="acos" onMouseDown={handleClick}>acos</button>
        <button name="atan" onMouseDown={handleClick}>atan</button>
        <button name="1" onMouseDown={handleClick}>1</button>
        <button name="2" onMouseDown={handleClick}>2</button>
        <button name="3" onMouseDown={handleClick}>3</button>
        <button name="4" onMouseDown={handleClick}>4</button>
        <button name="5" onMouseDown={handleClick}>5</button>
        <button name="6" onMouseDown={handleClick}>6</button>
        <button name="7" onMouseDown={handleClick}>7</button>
        <button name="8" onMouseDown={handleClick}>8</button>
        <button name="9" onMouseDown={handleClick}>9</button>
        <button name="0" onMouseDown={handleClick}>0</button>
        <button onMouseDown={calculate} id="result">Result</button>
      </div>
    </div>
  )
}

export default Calculator