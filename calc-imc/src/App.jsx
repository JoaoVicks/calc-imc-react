import { useState } from 'react'
import ImcCalc from '/src/components/ImcCalc.jsx'
import ImcTable from '/src/components/ImcTable.jsx'
import './App.css'

function App() {

  const [imc, setImc] = useState("");

  const calculateImc = (height, weight) => {

    if (!height || !weight) return;

    const updateHeight = +height.replace(',', '.');
    const updateWeight = +weight.replace(',', '.');

    let imcResult = (updateWeight / (updateHeight ** 2)).toFixed(2);

  
    console.log(imcResult);

    setImc(imcResult);

    

  }
  




  return (
    <>
      <div className="container">
        {!imc ? (<ImcCalc calcImc={calculateImc} />) : (<ImcTable imc = {imc} />)}
      </div>
    </>
  )
}

export default App
