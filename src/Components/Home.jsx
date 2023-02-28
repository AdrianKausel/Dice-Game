import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import { useNavigate} from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import Container from 'react-bootstrap/esm/Container';
library.add(fas)






function Home() {


    const navigate = useNavigate();

    const redirectUsr = () =>{
        navigate('/juego')
    }






    return (
        <Container>
        <div className='welcomePage'>
            <h1 className='titles2'>Bienvenido al Juego de Dados!</h1>
            <p className='textoInfo'>Instrucciones: Juego para 2 personas. Lanza el dado y responde tres preguntas, el mejor de tres será el ganador.</p>
            <AwesomeButton type="secondary" className="aws-btn2" onPress={redirectUsr}>Comenzar!</AwesomeButton>
        </div>
        </Container>
    );
}

export default Home;