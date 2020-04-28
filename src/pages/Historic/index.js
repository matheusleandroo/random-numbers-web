import React, { useState, useEffect } from 'react';

import { FaRandom, FaHome } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import { Container, Card } from './styles';

export default function Historic() {
  const [numbers, setNumbers] = useState([]);

  async function getNumbers() {
    try {
      const values = localStorage.getItem('numbers');

      if (values) setNumbers(JSON.parse(values));
    } catch (error) {
      toast.error(
        'Ocorreu um erro inesperado, tente realizar o processo novamente'
      );
    }
  }

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <>
      <Container>
        <Link to="/">
          <FaHome size="15px" />
        </Link>
        <h1>
          <FaRandom />
          Números Aleatórios
        </h1>
        {numbers.length ? (
          <>
            {numbers.map((item) => (
              <Card key={item.values}>
                <Card.Body>
                  <Row>
                    <Col>
                      <p>{item.values}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </>
        ) : (
          <>
            <Row>
              <Col>
                <h4 style={{ textAlign: 'center' }}>
                  Nenhum historico encontrado :(
                </h4>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
}
