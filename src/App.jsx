import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="App">
      <h1>CV Generator</h1>
      <PersonalInfo />
      <Experience />
      <Education />
    </div>
  );
}
