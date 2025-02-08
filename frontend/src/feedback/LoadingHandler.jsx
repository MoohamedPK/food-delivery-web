import Spinner from "./Spinner"
import {Lottihandler} from "./Lottihandler"

const LoadingHandler = ({status,error, children}) => {

    if (status === "pending") {
        return <Spinner/>
    } else if (status === "failed") {
        return <Lottihandler type={"notFound"} message={error} />;
    }

  return (
    <>
        {children}
    </>
  )
}

export default LoadingHandler