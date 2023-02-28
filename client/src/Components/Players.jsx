import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { AwesomeButton } from 'react-awesome-button';
import React from 'react';
import { useNavigate} from 'react-router-dom';


function Players() {


    const navigate = useNavigate();

    const redirectUsr = () =>{
        navigate('/registro')
    }

    return (
        <Container>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Jugador</th>
                        <th>Puntuación</th>
                        <th>Ganador?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Jugador 1</td>  
                        <td>
                        <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    </div>
                                ))}
                            </Form>
                        </td>
                        
                        <td>
                            <AwesomeButton type="secondary" className="aws-btn" onPress={redirectUsr}>Ganador!</AwesomeButton>
                        </td>
                    </tr>
                    <tr>
                        <td> Jugador 2</td>
                        <td>
                        <Form>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    </div>
                                ))}
                            </Form>
                        </td>
                        <td>
                            <AwesomeButton type="secondary" className="aws-btn" onPress={redirectUsr}>Ganador!</AwesomeButton>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
}

export default Players;