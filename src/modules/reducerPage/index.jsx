import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBy, addCount, resetCount, subCount } from "../../actions/counter";
import "./Counter.css";

function Counter() {
  const count = useSelector((state) => state.count);
  const [inp, setInp] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="counterContainer">
      <p>
        <b>Count :</b> {count}
      </p>
      <button onClick={() => dispatch(addCount())}>ADD</button>
      <button onClick={() => dispatch(subCount())}>SUB</button>
      <button onClick={() => dispatch(resetCount())}>RESET</button>
      <input
        type="number"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={() => dispatch(addBy(inp))}>Submit</button>
    </div>
  );
}

export default Counter;
