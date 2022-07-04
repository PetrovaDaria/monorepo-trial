import React, {Suspense} from "react";
import {SecondComponent} from "../../second-app/src/SecondComponent";
const RemoteApp = React.lazy(() => import("second_app/App"));
const RemoteSecondComponent = React.lazy(() => import("second_app/SecondComponent"));

const App = () => {
  return (
    <div>
      <div style={{
        margin:"10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"greenyellow"
      }}>
        <h1>App1</h1>
      </div>
      <Suspense fallback={"loading..."}>
        <RemoteApp/>
      </Suspense>
      <SecondComponent/>
    </div>)
}


export default App;
