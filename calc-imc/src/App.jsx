import { useState } from 'react'
import ImcCalc from '/src/components/ImcCalc.jsx'
import ImcTable from '/src/components/ImcTable.jsx'
import './App.css'
import { data } from '/src/data/data'

function App() {

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calculateImc = (height, weight) => {

    if (!height || !weight) return;

    const updateHeight = +height.replace(',', '.');
    const updateWeight = +weight.replace(',', '.');

    let imcResult = (updateWeight / (updateHeight ** 2)).toFixed(2);


    console.log(imcResult);

    setImc(imcResult);
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    });

  }

const voltarPadrao = () =>{
setImc('')
setInfo('')
setInfoClass('')
}



  return (
    <>
      <div className="container">
        {!imc ? (<ImcCalc calcImc={calculateImc} />) :
          (<ImcTable imc={imc} data={data} info={info} infoClass={infoClass}
          voltarPadrao={voltarPadrao} />)}
      </div>
    </>
  )
}

export default App
