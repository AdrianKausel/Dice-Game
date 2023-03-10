import React from 'react';
import RollDice from './RollDice'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import Preguntas from './Preguntas';
import Players from './Players';
library.add(fas)

function Main() {
    return (
        <div>
            <RollDice />
            <Preguntas/>
            <Players/>
        </div>
    );
}

export default Main;