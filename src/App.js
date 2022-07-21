
import './App.css';
import GeneralForm from './components/GeneralForm';
import { useState } from 'react';




function App() {
  const [data, setData] = useState([])

  function addNewData(newData){
    setData([...data, newData])
  }

  return (
    <div className="App">
      <GeneralForm 
      addNewData={addNewData}
      data={data}/>
    </div>
  );
}

export default App;
