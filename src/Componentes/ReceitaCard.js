import React from "react";
import { Card, Button } from "react-bootstrap";

const ReceitaCard = ({ titulo, descrição, imagem }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagem} />
            <Card.Body></Card.Body><Card.Title>{titulo}</Card.Title><Card.Text>{descrição}</Card.Text><Button variant="sucess" onClick={() => alert("Receita Completa em Breve!")}>
                Ver Receita
            </Button><Card.Body></Card.Body>
        </Card>
    );
};

export default ReceitaCard