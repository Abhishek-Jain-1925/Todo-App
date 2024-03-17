import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../reducers/CounterReducers";
import { RootState } from "../store/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="contents">
      <h1>Count - {count}</h1>
      <p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </p>
    </div>
  );
};

export default Counter;
