import React, { useState} from "react";
import { AwesomeButton } from 'react-awesome-button';
import Pregunta1 from './Preguntas/Pregunta1'
import Pregunta2 from './Preguntas/Pregunta2'
import Pregunta3 from './Preguntas/Pregunta3'
import Pregunta4 from './Preguntas/Pregunta4'
import Pregunta5 from './Preguntas/Pregunta5'
import Pregunta6 from './Preguntas/Pregunta6'






const Preguntas = () => {


    //swap components:
    
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);


    const handleClick1 = event => {
            setIsShown1(true);
            setIsShown2(false)
            setIsShown3(false)
            setIsShown4(false)
            setIsShown5(false)
            setIsShown6(false);
    };

    const handleClick2 = event => {
        setIsShown2(true);
        setIsShown1(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown5(false)
        setIsShown6(false);
    };
    
    const handleClick3 = event => {
        setIsShown3(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown4(false)
        setIsShown5(false)
        setIsShown6(false);
    };

    const handleClick4 = event => {
        setIsShown4(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown5(false)
        setIsShown6(false);
    };

    const handleClick5 = event => {
        setIsShown5(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown6(false);
    };
    const handleClick6 = event => {
        setIsShown6(true);
        setIsShown1(false)
        setIsShown2(false)
        setIsShown3(false)
        setIsShown4(false)
        setIsShown5(false);
    };



    return(
        
        <div className="gameContainer">
                            <div>
                                <h1 className="titles2">Preguntas </h1>
                                <div className="buttons">
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick1}>Pregunta 1</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick2}>Pregunta 2</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick3}>Pregunta 3</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick4}>Pregunta 4</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick5}>Pregunta 5</AwesomeButton>
                                    <AwesomeButton type="primary" className="aws-btn" onPress={handleClick6}>Pregunta 6</AwesomeButton>
                                </div>
                            </div>
                                {isShown1 && <Pregunta1/>}
                                {isShown2 && <Pregunta2/>}
                                {isShown3 && <Pregunta3/>}
                                {isShown4 && <Pregunta4/>}
                                {isShown5 && <Pregunta5/>}
                                {isShown6 && <Pregunta6/>}
            </div>         
    )
}


export default Preguntas;
