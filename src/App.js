import React from "react";
import ReceitaCard from "./Componentes/ReceitaCard";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap"

function App() {
  const receitas = [
    {
      titulo: "Salada de Grão de Bico",
      descrição: "Rica em Fibras e Muito Saborosa",
      imagem: "https://i.panelinha.com.br/i1/bk-3575-salada-grao-de-bico-mexicana.webp"
    },
    {
      titulo: "Frango Grelhado",
      descrição: "Simples e Pratico",
      imagem: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/09/21181855/frango-grelhado.webp"
    },
    {
      titulo: "Smoothie Verde",
      descrição: "Refrescante e Nutritivo",
      imagem: "https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F3f4b3cdfc1d8abd2971a631f477296e32ed59d6f.png&w=1080&q=70"
    }
  ];

  return (
    <><Container className="mt-4">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="home">Healthy Day</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#receitas">Receitas</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar Receita"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <h1 className="text-center mb-4">Healthy Day Eating</h1>
        <Row>
          {receitas.map((r, i) => (
            <Col key={i} md={4} className="mb-4">
              <ReceitaCard {...r} />
            </Col>
          ))}
        </Row>
      </Container></>
  );
}

export default App;