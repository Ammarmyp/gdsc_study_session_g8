import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-full flex-col justify-around items-center m-10">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.ErrorPage}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
