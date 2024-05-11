import { useState } from 'react'
import ImcCalc from '/src/components/ImcCalc.jsx'
import './App.css'

function App() {

  const calculateImc = (height, weight) => {
    console.log('sucesso');
    if (!height || !weight) return;

    const updateHeight = +height.replace(',', '.');
    const updateWeight = +weight.replace(',', '.');

    const imcResult = updateWeight / (updateHeight ** 2);

    console.log(imcResult);
  }

  const [imc, setImc] = useState("");

  return (
    <>
      <div className="container">
        {!imc ? (<ImcCalc calcImc={calculateImc} />) : (<ImcTable />)}
      </div>
    </>
  )
}

export default App
