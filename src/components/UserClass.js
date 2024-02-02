 import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); //why do we always use super method
    // console.log(props);
    // console.log(this.props.name+"Child Constructor");

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };


    this.state={
      userInfo:{
        name :"Dummy",
        location:"Default",
        avatar_url:""
      },
    }
  }

  async componentDidMount(){
    console.log( this.props.name+" child Component did mount is called")
const data=await fetch("https://api.github.com/users/kalyonnii");

const json =await data.json();


this.setState({
  userInfo:json
})
console.log(json)



  }

  componentDidUpdate(){
    console.log("Component did update is called")
  }
  componentWillUnmount(){
    console.log("Component will unmount called")
  }
  render() {
    // console.log("Child render")
    // const { count, count2 } = this.state;

    const {login,location,avatar_url}=this.state.userInfo
    return (
      
      <div className="user-card">
        {/* <h1>Count:{this.state.count}</h1>
        <h1>Count2:{this.state.count2}</h1> */}
        {/* <h1>Count:{count}</h1> */}
        {/* <button
          onClick={() => {
            //Never updates state variables directly
            // this.state.count=this.state.count+1
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2:{count2}</h1> */}
        {/* <h2>Name:{this.props.name}</h2>
        <h3>Location :Kerala</h3>
        <h4>Contact: 9110762518</h4> */}
        <h1 className="font-bold text-2xl">Userclass component</h1>
<img src={avatar_url }></img>
<h2>Name:{login}</h2>
        <h3>Location :{location}</h3>
        <h4>Contact: 9110762518</h4>
      </div>
    );
  }
}
export default UserClass;
