import Entry from "./components/Entry";
import { FILES } from "./data/files.js";

const App = () => {
  return (
    <div className="app">
      {FILES.children.map((entry, key) => (
        <Entry entry={entry} indentationLevel={1} key={key} />
      ))}
    </div>
  );
};

export default App;
