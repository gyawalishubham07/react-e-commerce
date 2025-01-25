import {useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { decreaseCount, increaseCount } from "../redux/counter/counterSlice";


const HomeForCount = () => {

  const dispatch = useDispatch();  

const {count} = useSelector((state)=>state.counter);  // read the change state of counter

    function countingValue(){
      dispatch(increaseCount());  // set state (update state)
    }
   

return (
    <section>
      
      {/* <Header/> => is in layouts file so don't need to show here*/}
      <h1 className="mt-24">Home Page</h1>
      <div>
        <h1>Count : {count}</h1>
        <button className="bg-teal-500 mx-5 py-5 px-3 font-bold text-3xl" type="button" onClick={countingValue}>+</button>
        <button className="bg-red-500 mx-5 py-5 px-3 font-bold text-3xl" type="button" onClick={()=>dispatch(decreaseCount())}>-</button>
      </div>
    </section>
  );
};

export default HomeForCount;
