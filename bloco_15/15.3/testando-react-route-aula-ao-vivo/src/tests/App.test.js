import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('routes', () => {
  test('verifica página inicial e de projetos', () => {
    const { history } = renderWithRouter(<App />);

    const aboutMeText = screen.getByRole('heading', {
      level: 1,
    });
    expect(aboutMeText).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', {
      name: /projetos/i,
    });

    userEvent.click(projectsLink);

    const projectsText = screen.getByRole('heading', {
      level: 1,
      name: /página de projetos/i,
    });
    expect(projectsText).toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/projects');
  });
});

describe('App.js comments', () => {
  test('Verifica se o comentário digitado aparece na tela', () => {
    const { history } = renderWithRouter(<App />);

    const aboutMeText = screen.getByRole('heading', {
      level: 1,
    });
    expect(aboutMeText).toBeInTheDocument();

    const commentLink = screen.getByRole('link', {
      name: /deixe um comentário/i,
    });

    userEvent.click(commentLink);

    const commentText = screen.getByRole('heading', {
      level: 1,
      name: /Comente!/i
    });
    expect(commentText).toBeInTheDocument();

    const inputComment = screen.getByRole('textbox');
    userEvent.type(inputComment, 'primeiro comentário');

    const submitButton = screen.getByRole('button', {
      name: 'Add Comment!',
    });
    userEvent.click(submitButton);

    const comment = screen.getByText('primeiro comentário');
    expect(comment).toBeInTheDocument();

    const { pathname } = history.location;
    expect(pathname).toBe('/comments');
  });
});

describe('Rota não encontrada', () => {
  test('Verifica se carrega a página não encontrada, erro 404', () => {
    const { history } = renderWithRouter(<App />);

    const route = '/pagina-que-nao-existe';
    history.push(route);

    const pageNotFound = screen.getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
  });
});