import * as React from "react";
import * as ReactDom from "react-dom";

class App extends React.Component{
    render() {
        return (
          <div>
              <h1>rikaaa.org</h1>
          </div>
        );
    }
}

Promise.resolve("test")

ReactDom.render(<App/>, document.getElementById("app"));