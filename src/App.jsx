import "./App.css";
import ThemeSwitch from "./components/ThemeSwitch";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <ThemeSwitch
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        />
      </div>
    </div>
  );
}

export default App;
