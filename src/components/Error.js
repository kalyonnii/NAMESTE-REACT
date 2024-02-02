import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="m-4 p-3">
      <h1 className="font-extrabold text-3xl p-2">Oops!!!</h1>
      <h2 className="text-xl p-2 font-bold">Something Went Wrong</h2>
      <h3 className="p-2 font-bold">
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};
export default Error;
