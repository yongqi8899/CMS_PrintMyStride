import { useRouteError } from "react-router-dom";
import {memo} from "react";
const ErrorPage =  memo(() => {
  const error = useRouteError();
  return (
    <div className=" flex flex-col m-10 gap-10">
      <h1 className="text-3xl font-bold text-red-400">Error Page</h1>
      <p className="">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
})
export default ErrorPage;
