import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
    test('debe de hacer match con el snapshot', () => {
        const name = 'Carlos Casalengua Galavis';
        // const { container } = render(<FirstApp name={name} number={8}></FirstApp>)
        // console.log(container);

        // expect(container).toMatchSnapshot();
    })
})