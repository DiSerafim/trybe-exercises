import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Conteudo from './conteudo/Conteudo';

test('Verifica se há um campo input de email na tela', () => {
  // acessa os elementos da tela do Conteudo
  const { getByLabelText } = render(<Conteudo />);
  const inputEmail = getByLabelText('Email:');

  // faz o teste do Conteudo
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

// Verifica se há um botão
test('Verifica se há dois botões', () => {
  // acessa os elementos da tela do Conteudo
  const { getAllByRole } = render(<Conteudo />);
  const button = getAllByRole('button');

  // faz o teste do Conteudo
  expect(button.length).toBe(2);
});

// Verifica se há um botão ENVIAR
test('Verifica se há um botão \'Enviar\'', () => {
  const { getByTestId } = render(<Conteudo />);
  const button = getByTestId('id-send');

  expect(button).toBeInTheDocument();
  expect(button).toHaveValue('Enviar');
});

test('Verifica se, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
  // Acessar os elementos da sua tela
  const{ getByTestId, getByLabelText } = render(<Conteudo />);
  const emailInput = getByLabelText('Email:');
  const sendButton = getByTestId('id-send');
  const userEmail = getByTestId('id-email-user');

  // Interagir com eles (se houver necessidade)
  fireEvent.change(emailInput, { target: { value: '' } });
  fireEvent.click(sendButton);

  // Fazer seu teste
  expect(emailInput.value).toBe('');
  expect(userEmail.textContent).toBe('Resultado: ');
});

  
  // Acessar os elementos da sua tela

  // Interagir com eles (se houver necessidade)

  // Fazer seu teste
