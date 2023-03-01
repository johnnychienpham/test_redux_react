import { updateStart,updateError,updateSuccess } from "./userSlice";
import axios from "axios";

export const updateUser= async(user,dispatch)=>{
    dispatch(updateStart());
    try{
        console.log(user)
        const res= await axios.post("/v1/update",user)
        dispatch(updateSuccess(res.data))
    }catch(err){
        dispatch(updateError())
    }
}