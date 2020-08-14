import React, { useState, useEffect } from 'react';

import { FaRandom, FaHome, FaCopy } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import copy from 'copy-to-clipboard';

import { Container, DivIcon, Card } from '../styles';

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
        <DivIcon>
          <Link to="/" title="Início">
            <FaHome size="20px" color="#466b39" />
          </Link>
        </DivIcon>
        <h1>
          <FaRandom />
          Números Aleatórios
        </h1>

        {numbers.length ? (
          <>
            {numbers.map((item) => (
              <Card key={item.values}>
                <DivIcon
                  title="Copiar"
                  onClick={() => {
                    copy(item.values);
                  }}
                >
                  <FaCopy size="15px" color="#519739" />
                </DivIcon>
                <p>{item.values}</p>
              </Card>
            ))}
          </>
        ) : (
          <>
            <div>
              <h4 style={{ textAlign: 'center' }}>
                Nenhum historico encontrado :(
              </h4>
            </div>
          </>
        )}
      </Container>
    </>
  );
}
