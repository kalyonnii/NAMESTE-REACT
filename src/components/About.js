

import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import React from "react";
import User from "./User"
class About extends React.Component{
  constructor(props){
    super(props)
    console.log("parent constructor")

  }
  componentDidMount(){
    console.log(" Parent Component did mount is called")
    //used to make an api call
  }
  render(){
    console.log("Parent render")
    return (
      <div>
      <h1>About</h1>
      <div>
        Logged In User
        <UserContext.Consumer>
          {({loggedInUser})=>(
            <h1 className="text-lg font-bold">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
      </div>
      <h2> This is namaste React</h2>
      <User name="Bunny function "/>
      <UserClass name ={"bunny class"} /> 
      {/* <UserClass name ={"chinni class"} /> */}
    </div>
    )
  }
}


// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2> This is namaste React</h2>
//       <User name={"Bunny function "} />
//       <UserClass name ={"bunny class"} />
//     </div>
//   );
// };
export default About;


//output
// parent constructor
//  Parent render
//  bunny classChild Constructor
//  Child render
//  chinni classChild Constructor
//  Child render
// bunny class child Component did mount is called
// chinni class child Component did mount is called
// Parent Component did mount is called

//because of baching concept --it batches all render one time and baches mounted one time so the ouput will be like that 
