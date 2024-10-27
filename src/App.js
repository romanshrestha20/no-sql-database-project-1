import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Card from './component/Card'

const App = () => {

  const [burgers, setBurgers] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/burgers');
      const dataRender = Object.keys(response.data.data).map(burger => response.data.data[burger]);
      setBurgers(dataRender);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(()=> {
    fetchData()
  }, [])

  console.log(burgers)
  
  return (
    <div className="App">
    
    <h2>
      Here's the list of burgers
    </h2>
    {burgers && burgers.map(burger => (
      <Card key={burger.id} burger={burger}/>
    ))}

    </div>
  );
}

export default App;
