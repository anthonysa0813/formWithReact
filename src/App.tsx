import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <>
      {showComponent ? (
        <Login setShowComponent={setShowComponent} />
      ) : (
        <Register setShowComponent={setShowComponent} />
      )}
    </>
  );
};

export default App;
