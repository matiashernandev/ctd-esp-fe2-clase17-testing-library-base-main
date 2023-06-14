/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/*features/following/button.tsx
Este componente requiere de la creación de una mock function para poder suplir la required props, y también vamos a poder utilizar getByAltText para evaluar si el botón se muestra con el estado correcto.
Deberíamos realizar tres casos de prueba: uno para ver si renderiza correctamente como favorito; otro para ver si renderiza bien cuando no es favorito; y un último para ver si al hacer un clic en el botón, invoca correctamente el mock de la función toggle. 
 */

import { fireEvent, render, screen, } from '@testing-library/react';
import FollowingButtonComponent from './following-button.component';
import userEvent from '@testing-library/user-event'

describe('following-button.component', () => {

  test('Debería renderizar botón como favorito', () => {

    render(<FollowingButtonComponent isFav={true} onToggleFavorite={() => { }} />);
    const buttonElement = screen.getByAltText('is_favorite');
    expect(buttonElement).toBeInTheDocument();
  });

  test('should render button as not favorite', () => {

    render(<FollowingButtonComponent isFav={false} onToggleFavorite={() => { }} />)
    const buttonElement = screen.getByAltText("is_not_favorite")
    expect(buttonElement).toBeInTheDocument()

  })

  test('should invokes onToggleFavorite when button is clicked', () => {

    const mockToggleFavorite = jest.fn()

    render(<FollowingButtonComponent isFav={false} onToggleFavorite={mockToggleFavorite} />)

    const buttonElement = screen.getByAltText("is_not_favorite")
    //fireEvent.click(buttonElement)

    userEvent.click(buttonElement)

    expect(mockToggleFavorite).toHaveBeenCalledWith(true)

  })

});
