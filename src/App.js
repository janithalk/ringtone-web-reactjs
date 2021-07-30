import logo from "./logo.svg";
import { Button } from "antd";
import "./assests/sass/style.scss";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>This is a variable example</h1>
          <Button>Click Here</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
