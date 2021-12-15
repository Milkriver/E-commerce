import './App.css';
import { Main } from '../src/components/main'
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [storeState, setStoreState] = useState([]);
  useEffect(() => {
    const apiUrl = 'https://raw.githubusercontent.com/Milkriver/API/main/itemsData.json';
    axios.get(apiUrl).then((resp) => {
      const data = resp.data;
      setStoreState(data);
    });
  }, [setStoreState]);
  return (
    <div className="App">
      <Main menuItems={storeState} />
    </div >
  );
}

export default App;
