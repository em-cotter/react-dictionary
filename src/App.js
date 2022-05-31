
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Inside">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <div className="Footer">
          Coded by Emma Cotter, open-sourced on{" "}
          <a
            href="https://github.com/em-cotter/react-dictionary/tree/master/src"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
