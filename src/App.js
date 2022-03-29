import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(incNumber())}>+</button>
      <input type="text" value={myState} className="input" />
      <button onClick={() => dispatch(decNumber(5))}>-</button>
    </div>
  );
}
