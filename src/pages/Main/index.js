import React, { useState } from 'react';

import { FaRandom, FaHistory, FaCopy } from 'react-icons/fa';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import copy from 'copy-to-clipboard';
import { validateNumber, validetFileds } from '../../helpers';

import { Form, SubmitButton } from './styles';
import { Container, DivIcon, Card } from '../styles';

import api from '../../services/api';

export default function Main() {
  const [payload, setPayload] = useState({
    minNumber: '',
    maxNumber: '',
    amount: '',
  });
  const [numbers, setNumbers] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e, params) {
    e.preventDefault();
    setLoading(true);

    try {
      setNumbers('');

      if (!validetFileds(params)) return;

      const response = await api.post('/generate', params);

      const values = `${response.data}`.split(',').join(', ');

      setNumbers(values);

      toast.success('Números gerados com sucesso');

      let historic = localStorage.getItem('numbers');

      if (historic === null) historic = [];
      else historic = JSON.parse(historic);

      historic.push({ values });

      localStorage.setItem('numbers', JSON.stringify(historic));
    } catch (error) {
      toast.error(
        'Ocorreu um erro inesperado, tente realizar o processo novamente'
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Container>
        <DivIcon>
          <Link to="/historic" title="Histórico">
            <FaHistory size="20px" color="#519739" />
          </Link>
        </DivIcon>
        <h1>
          <FaRandom />
          Números Aleatórios
        </h1>

        <Form onSubmit={(e) => handleSubmit(e, payload)}>
          <div>
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="De"
              value={payload.minNumber}
              onChange={(e) => {
                if (validateNumber(e.target.value))
                  setPayload({
                    ...payload,
                    minNumber:
                      e && e.target.value ? parseInt(e.target.value, 10) : '',
                  });
              }}
            />
          </div>

          <div>
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Até"
              value={payload.maxNumber}
              onChange={(e) => {
                if (validateNumber(e.target.value))
                  setPayload({
                    ...payload,
                    maxNumber:
                      e && e.target.value ? parseInt(e.target.value, 10) : '',
                  });
              }}
            />
          </div>

          <div>
            <input
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="Quantidade"
              value={payload.amount}
              onChange={(e) => {
                if (validateNumber(e.target.value, true))
                  setPayload({
                    ...payload,
                    amount:
                      e && e.target.value ? parseInt(e.target.value, 10) : '',
                  });
              }}
            />
          </div>

          <div>
            <SubmitButton
              loading={loading ? 1 : 0}
              title="Gerar números aleatórios"
            >
              Gerar
            </SubmitButton>
          </div>
        </Form>

        {numbers !== '' && !loading ? (
          <>
            <hr />

            <Card>
              <DivIcon
                title="Copiar"
                onClick={() => {
                  copy(numbers);
                }}
              >
                <FaCopy size="15px" color="#519739" />
              </DivIcon>
              <p>{numbers}</p>
            </Card>
          </>
        ) : null}
      </Container>
    </>
  );
}
