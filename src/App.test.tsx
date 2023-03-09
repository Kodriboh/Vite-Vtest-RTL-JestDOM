/* eslint-disable prettier/prettier */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('Renders Hello World!', () => {
        render(<App/>);

        const appContainer = screen.getByRole('application');

        expect(appContainer).toBeInTheDocument();
    });
});
