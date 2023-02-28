import React, { useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../App.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';  
import { useState } from "react";
library.add(fas)




function WinnerList() {

    const [datas, setDatas] = useState([]);
    const [reload, setReload] = useState();

    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get("http://localhost:8000/api/players/")
        .then (resp => {
            if(!resp.data.error)
            setDatas(resp.data.players);
            console.log(resp.data.players)


        })
    },[reload])

    return (
        <Container>
            <h1 className="titles2"> Ganadores: </h1>
            <Table striped bordered hover>
                <thead>
                </thead>
                <tbody>
                {datas.map((dato,i) => (
                        <tr key={i}>
                        <td>{dato.player}</td>
                </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default WinnerList;