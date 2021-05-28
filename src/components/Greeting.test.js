import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';


describe('Greeting text', ()=>{

    beforeEach(()=>{
        //Arrange before running each test
        render(<Greeting/>);
    })
    test('show "hello word" text', ()=>{        
        //Act
        //nothing
    
        //Assert
        // const hello = screen.getByText(/hello world/i);
        const hello = screen.getByText("Hello World", {exact: false});
    
        expect(hello).toBeInTheDocument();
    })

    test('renders "How are you?" text', ()=>{
        const hru = screen.getByText("How are you?", {exact: false});
        expect(hru).toBeInTheDocument();
    })

    test('renders "Is your family ok?" text', ()=>{
        //can be text too
        const buttonElement = screen.getByRole('button');

        //act
        userEvent.click(buttonElement);

        //assert
        const outputElement =  screen.getByText("Is your family ok?", {exact: true});
        expect(outputElement).toBeInTheDocument();
    })

    test('not visible "How are you?" text after button click', ()=>{
        //can be text too
        const buttonElement = screen.getByRole('button');

        //act
        userEvent.click(buttonElement);

        //assert
        const outputElement =  screen.queryByText("How are you?", {exact: true});
        expect(outputElement).toBeNull();
    })
})
