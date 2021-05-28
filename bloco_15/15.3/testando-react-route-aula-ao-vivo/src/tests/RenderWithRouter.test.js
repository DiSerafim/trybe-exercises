import React from 'react';
import { screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

import App from '../App';

describe('routes', () => {
  test('verifica página inicial e de projetos', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <App />
      </Router>
    );

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
