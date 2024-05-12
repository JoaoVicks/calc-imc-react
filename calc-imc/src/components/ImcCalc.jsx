import { useState } from 'react'
import Button from './Button'
import "../styles/ImcCalc.css"

const ImcCalc = ({calcImc}) => {
    
    const [altura,setAltura] = useState("")
    const [peso,setPeso] = useState("")
    
    const validCaracteres = (text)=>{
    return text.replace(/[A-Za-z.]/g,"");
    }

    const handleAltura = (e) =>{
        const updateText = validCaracteres(e.target.value)
        setAltura(updateText)
        console.log(altura)
    }

    const handlePeso = (e) =>{
        const updateText = validCaracteres(e.target.value)
        setPeso(updateText)
        console.log(peso)
    }
    
    const cleanInputs=()=>{
    
    setPeso("")
    setAltura("")
    
    }

    return (
        <div id='form-container'>
            <h2>Calculadora de IMC</h2>
            <form>
                <label>
                    <span>Altura :</span>
                    <input type="text" placeholder='exemplo: 1,75' 
                    onChange={(e)=> handleAltura(e)} value={altura}/>
                </label>
                <label>
                    <span>Massa :</span>
                    <input type="text" placeholder='exemplo: 70' 
                    onChange={(e)=> handlePeso(e)} value={peso}/>
                </label>
                <div className="container-form-buttons">

                    <Button texto="Calcular" id="iCalcular" 
                    action= {(e)=> calcImc(altura,peso)}
                    />

                    <Button texto="Limpar" id="iLimpar"  
                    action={cleanInputs}
                    />
                </div>
                
            </form>
        </div>
    )
}

export default ImcCalc