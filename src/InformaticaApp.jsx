import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { teskt1, teskt2, teskt3, teskt4, teskt5} from "./teskten.js";
import Card from 'react-bootstrap/Card';
import {Row} from "react-bootstrap";

function FancyCard({title, text}) {
    return(
        <Row>
            <Card className="">
                <Card.Header>
                    <p>{title}</p>
                </Card.Header>
                <Card.Body>
                    <p>{text}</p>
                </Card.Body>
            </Card>
        </Row>
    )
}

function TableCard({title, text1, text2}){
    const table = (
        <table className="table">
            <tbody>
            <tr>
                <th scope="col">Naam</th>
                <th scope="col">CPU</th>
                <th scope="col">Geheugen</th>
                <th scope="col">Opslag</th>
            </tr>
            <tr>
                <td scope="row">HP Envy x360 15-ew0006nb</td>
                <td>Intel I7</td>
                <td>16GB</td>
                <td>1TB SSD</td>
            </tr>
            <tr>
                <td scope="row">Macbook Pro M1 editie</td>
                <td>M1</td>
                <td>16GB</td>
                <td>1TB SSD</td>
            </tr>
            <tr>
                <td scope="row">HP Chromebook</td>
                <td>Intel i5</td>
                <td>8GB</td>
                <td>512GB SSD</td>
            </tr>
            </tbody></table>
    )

    return(
        <div className="row">
            <div className="card">
                <div className="card-header">
                    <p>{title}</p>
                </div>
                <div className="card-body">
                    <p>{text1}</p>
                    {table}
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )

}

function SizedBox({height}) {
    return(
        <div style={{height: height}} className={"sizedBox"}/>
    )
}

function InformaticaApp() {
    return(
        <Row>
            <div className="row-lg-6 row-md-12 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                    <FancyCard title="IT-Dienst en/of producten" text={teskt1} />
                    <SizedBox height="50px"/>
                    <TableCard title="Computermateriaal" text1={teskt2} text2={teskt3}/>
                    <SizedBox height="50px"/>
                    <FancyCard title="Software" text={teskt4}/>
                    <SizedBox height="50px"/>
                    <FancyCard title="Internet en beveiliging" text={teskt5} />
                </div>
            </div>
        </Row>
    )
}

export default InformaticaApp
