import React, {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';
import Respuesta3 from "./Respuesta3";


const Pregunta3 = () => {
    


    const [isShown1, setIsShown1] = useState(false);


    const handleClick1 = event => {
        setIsShown1(true);

};


    return(
            <h1 className="questionBlock">
                ¿En qué ciudades de USA se ubican las sedes de ITAÚ?
                <div className="buttons">
                    <AwesomeButton type="primary" className="aws-btn3" onPress={handleClick1}>Ver Respuesta:</AwesomeButton>
                    {isShown1 && <Respuesta3/>}
                </div>
            </h1>
    )
}


export default Pregunta3;