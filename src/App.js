import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Abuja" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/GloryEvi"
            target="_blank"
            rel="noreferrer"
          >
            Glory Evi
          </a>{" "}
          open-sourced on{" "}
          <a
            href="https://github.com/GloryEvi/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://e-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
