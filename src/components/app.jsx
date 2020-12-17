import React from "react";
import Main from "./main";

const App = (props) => {
  const { movieTitle } = props;

  return <Main movieTitle={movieTitle} />;
};

export default App;
