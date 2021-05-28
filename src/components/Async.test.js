import { render, screen } from '@testing-library/react';
import Async from './Async';

describe("Async Component", ()=>{

    beforeEach(()=>{
        //Arrange before running each test
        render(<Async/>);
    })

    test('renders component', async()=>{
        window.fetch = jest.fn();

        window.fetch.mockResolvedValueOnce({
            json: async()=> [
                {
                    id: 'p1',
                    title: 'First post'
                }
            ]
        })
        const listElements = await screen.findAllByRole('listitem');
        expect(listElements).not.toHaveLength(0);
    })
})