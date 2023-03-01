import {createSlice} from "@reduxjs/toolkit";
// initialState la gia tri ban dau, tuc la khi vua vao redux vua load trang do thi gia tri ban dau cua no se la
// reducer la nhung cach ma minh se lam voi cai Slice nay, dc coi la 1 function hanh dong voi nhung gia tri initialState trong Slice
export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"Johnny",
        age:"20",
        about:"I'm a software engineer",
        avaUrl:"https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
        themeColor:"#ff9051",
        pending:false,
        error:false,
    },
    reducers:{
        updateStart: (state)=>{
            state.pending=true;
        },
        updateError:(state)=>{
            state.pending=false;
            state.error = true;
        },
        updateSuccess: (state,action)=>{
            state.pending=false;
            state.error=false;
            state.name=action.payload.name; // state.name la Johnny, action.payload.name la gia tri ben ngoai
            state.age=action.payload.age;
            state.about=action.payload.about;
            state.avaUrl=action.payload.avaUrl;
            state.themeColor=action.payload.themeColor;
        }


        // update:(state,action)=>{
            // state.name=action.payload.name; // state.name la Johnny, action.payload.name la gia tri ben ngoai
            // state.age=action.payload.age;
            // state.about=action.payload.about;
            // state.avaUrl=action.payload.avaUrl;
            // state.themeColor=action.payload.themeColor;

        // }
    }
})

export const {updateStart,updateSuccess,updateError} = userSlice.actions;
export default userSlice.reducer;