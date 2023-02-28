import React, {useState} from "react";
import Respuesta1 from "./Respuesta1";
import { AwesomeButton } from 'react-awesome-button';




const Pregunta1 = () => {

    
    const [isShown1, setIsShown1] = useState(false);


    const handleClick1 = event => {
        setIsShown1(true);

};
    
    return(
            <h1 className="questionBlock">
                ¿Cuál es nuestro propósito?
                <div className="buttons">
                    <AwesomeButton type="primary" className="aws-btn3" onPress={handleClick1}>Ver Respuesta:</AwesomeButton>
                    {isShown1 && <Respuesta1/>}
                </div>
            </h1>
    )
}


export default Pregunta1;