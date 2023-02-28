import React, {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';
import Respuesta6 from "./Respuesta6";


const Pregunta6 = () => {


    const [isShown1, setIsShown1] = useState(false);


    const handleClick1 = event => {
        setIsShown1(true);

};
    
    return(
            <h1 className="questionBlock">
                ¿Cuál es la serie de zombies de HBO MAX donde el protagonista es un actor chileno?
                <div className="buttons">
                    <AwesomeButton type="primary" className="aws-btn3" onPress={handleClick1}>Ver Respuesta:</AwesomeButton>
                    {isShown1 && <Respuesta6/>}
                </div>
            </h1>
    )
}


export default Pregunta6;