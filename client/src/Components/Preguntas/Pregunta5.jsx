import React, {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';
import Respuesta5 from "./Respuesta5";


const Pregunta5 = () => {

    const [isShown1, setIsShown1] = useState(false);


    const handleClick1 = event => {
        setIsShown1(true);

};

    
    return(
            <h1 className="questionBlock">
                ¿Cuál es la velocidad de la luz?
                <div className="buttons">
                    <AwesomeButton type="primary" className="aws-btn3" onPress={handleClick1}>Ver Respuesta:</AwesomeButton>
                    {isShown1 && <Respuesta5/>}
                </div>
            </h1>
    )
}


export default Pregunta5;