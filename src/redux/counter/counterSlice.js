import { createSlice } from "@reduxjs/toolkit";

// const [count,setCount] = useState(0);

const counterSlice = createSlice({
    name:"counter",  // this name is used in store.js => redux-persist whitelist
    initialState:{  // like count 
        count:0,    //  this the value in  useState(0)
        // user:null,
    },
    reducers:{ // iniside this action of above state to change state
        increaseCount(state) {   // this is like setCount
            state.count = state.count + 1;

        },
        decreaseCount(state) {
            state.count = state.count - 1;
        }
    }
});

export const {increaseCount,decreaseCount} = counterSlice.actions;

export default counterSlice.reducer;