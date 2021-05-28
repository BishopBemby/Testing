import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';


describe('Greeting text', ()=>{
    test('show hello word text', ()=>{
        //Arrange
        render(<Greeting/>);
    
        //Act
        //nothing
    
        //Assert
        // const hello = screen.getByText(/hello world/i);
        const hello = screen.getByText("Hello World", {exact: false});
    
        expect(hello).toBeInTheDocument();
    })
})
