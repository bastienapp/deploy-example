import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/items`)
      .then((response) => setItems(response.data))
      .catch((err) => setError(JSON.stringify(err)));
  }, []);

  return (
    <div className="App">
      {error && <pre>{error}</pre>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
