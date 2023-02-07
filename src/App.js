import "./styles.css";
import { MyComponet } from "./component";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MyComponet value="a" propa="props from parent" />
    </div>
  );
}
