import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA  from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
test("should render RestaurantCard component with props Data ", ()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>)

   const name= screen.getByText("Leon's - Burgers & Wings (Leon Grill)")
   expect(name).toBeInTheDocument()
})

// test("should render RestaurantCard component with promoted label ", ()=>{

//     //promoted label

   
// })