import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("Contact Us page Test Case",()=>{

// beforeAll(()=>{
//     console.log("Before All")
// })
// afterAll(()=>{
//     console.log("After All")
// })
// beforeEach(()=>{
//     console.log("Before Each")
// })

// afterEach(()=>{
//     console.log("After Each")
// })
test("should load contact us component", ()=>{
    render(<Contact/>)
    const heading =screen.getByRole("heading")
    //assertion 
    expect(heading).toBeInTheDocument();
    
})


test("should load button inside the component ", ()=>{
    render(<Contact/>)
    const button =screen.getByRole("button")
    
    //const button =screen.getByText("Submit")
    // const button =screen.getByText("random") --//error
    //assertion 
    expect(button).toBeInTheDocument();
    

})

// test("should load input inside component", ()=>{
//     render(<Contact/>)
//     const inputName =screen.getByPlaceholderText("name") //==pass
//     //const inputName =screen.getByPlaceholderText("name1") //==error
//     //assertion 
//     expect(inputName).toBeInTheDocument();
    
// })
//it=====test
it("should load input inside component", ()=>{
    render(<Contact/>)
    const inputName =screen.getByPlaceholderText("name") //==pass
    //const inputName =screen.getByPlaceholderText("name1") //==error
    //assertion 
    expect(inputName).toBeInTheDocument();
    
})

test(
    "should load two input boxes on the contact component ",()=>{
        render(<Contact/>)

        //querying 
        //const  inputBoxes= screen.getByRole("input");
        //const  inputBoxes= screen.getByRole("textbox");
        const  inputBoxes= screen.getAllByRole("textbox");
        // console.log(inputBoxes)
        // console.log(inputBoxes[0])
        //console.log(inputBoxes.length)

        //assertion
        expect(inputBoxes.length).toBe(2); //pass
        //expect(inputBoxes.length).toBe(3);//fail
        //expect(inputBoxes.length).not.toBe(3);//pass

    }
)
})
