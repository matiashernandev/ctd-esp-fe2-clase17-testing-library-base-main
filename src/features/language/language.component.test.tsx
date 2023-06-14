import { render, screen } from '@testing-library/react';
import LanguageComponent from './language.component';
import { LanguageProvider } from './language.context';
import userEvent from '@testing-library/user-event';

describe('LanguageComponent', () => {
  beforeEach(() =>
    render(
      <LanguageProvider>
        <LanguageComponent />
      </LanguageProvider>
    )
  );

  test('renders all three buttons', () => {
    const spanishButton = screen.getByText('Spanish');
    const englishButton = screen.getByText('English');
    const portugueseButton = screen.getByText('Portuguese');

    expect(spanishButton).toBeInTheDocument();
    expect(englishButton).toBeInTheDocument();
    expect(portugueseButton).toBeInTheDocument();
  });

  test('should clicking Spanish button sets the language to Spanish', () => {
    const spanishButton = screen.getByText('Spanish');

    userEvent.click(spanishButton);
    const spanishText = screen.getByText('Español');
    expect(spanishText).toBeInTheDocument();
  });

  test('should clicking Portuguese button sets the language to Portuguese', () => {
    /*   render(
      <LanguageProvider>
        <LanguageComponent />
      </LanguageProvider>
    ); */
    const portugueseButton = screen.getByText('Portuguese');
    userEvent.click(portugueseButton);
    expect(screen.getByText('Português')).toBeInTheDocument();
  });
});
