import React, {useState} from "react";
import { AwesomeButton } from 'react-awesome-button';
import Respuesta2 from "./Respuesta2";



const Pregunta2 = () => {


    const [isShown1, setIsShown1] = useState(false);


    const handleClick1 = event => {
        setIsShown1(true);

};
    
    return(
            <h1 className="questionBlock">
                Menciona 3 valores de nuestra cultura ituber
                <div className="buttons">
                    <AwesomeButton type="primary" className="aws-btn3" onPress={handleClick1}>Ver Respuesta:</AwesomeButton>
                    {isShown1 && <Respuesta2/>}
                </div>
            </h1>
    )
}


export default Pregunta2;