import { render, screen } from '@testing-library/react';
import Async from './Async';

describe("Async Component", ()=>{

    beforeEach(()=>{
        //Arrange before running each test
        render(<Async/>);
    })

    test('renders component', async()=>{
        const listElements = await screen.findAllByRole('listitem');
        expect(listElements).not.toHaveLength(0);
    })
})