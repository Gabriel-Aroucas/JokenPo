import '@testing-library/jest-dom'
import {render,screen} from "@testing-library/react"
import Loader from './Loader'

describe("Loader",()=>{
    it("shoud render the load screen",()=>{
        render(<Loader/>)
        
        expect(screen.getByText("Carregando...")).toBeInTheDocument();
    })
    it("should change display to none",()=>{
        render(<Loader/>)
        expect(screen)
    })
})