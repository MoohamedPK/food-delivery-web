import { Lottihandler } from "../../feedback/Lottihandler";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="">
      <Lottihandler type={"notFound"} message={'Page not found'}/>
      <Link to={"/"} className="text-base mt-4 underline">Move back to safety</Link>
    </div>
  );
}
