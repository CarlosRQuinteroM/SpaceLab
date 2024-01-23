import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* Here we can see an image of a rocket without direction and a message*/}
      <p></p>
      <h2>
        <Link to="/">Go to the home page</Link>
      </h2>
    </div>
  );
}

export default ErrorPage;
