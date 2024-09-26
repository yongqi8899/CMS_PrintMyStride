import {memo} from "react";
const Loading =  memo(() =>{
  return <div className="flex m-auto loading loading-spinner loading-lg text-success"></div>;
})

export default Loading;