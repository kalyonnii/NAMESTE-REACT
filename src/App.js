import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Contact from "./components/Contact";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";

import UserContext from "./utils/UserContext";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import RestaurantMenu from "./components/RestaurantMenu";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

// const Header = () => {

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img
//           className="logo"
//           src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
//         />
//       </div>
//       <div className="nav-items">
//         <ul>
//           <li>Home</li>
//           <li>About Us </li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
// inline styling
// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };
// const RestaurantCard = (props) => {
// const {resName, cusine}=props
//     console.log(props)
//   return (
//     <div className="res-card" style={styleCard}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg"
//       />
//       <h3>{resName}</h3>
//       <h4>{cusine}</h4>
// <h3>{props.resName}</h3>
//       <h4>{props.cusine}</h4>
//       <h4>4.4 stars</h4>
//       <h4>38 min</h4>
//     </div>
//   );
// };
// const RestaurantCard = ({ resName, cusine }) => {
//   //destructuring on the fly
//   return (
//     <div className="res-card" style={styleCard}>
//       <img
//         className="res-logo"
//         alt="res-logo"
//         src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2024%2Ftrend20180912075024.jpg"
//       />
//       <h3>{resName}</h3>
//       <h4>{cusine}</h4>
//       <h4>4.4 stars</h4>
//       <h4>38 min</h4>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         {/* restauarent card */}
//         <RestaurantCard
//           resName="Meghana Foods"
//           cusine="Biryani, North Indian, Asian "

//         />
//         <RestaurantCard
//           resName="KFC "
//           cusine="Burger, faast food ,  North Indian, Asian "
//         />
//       </div>
//     </div>
//   );
// };
const AppLayout = () => {
  //authentication
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "Bunny",
    };
    setUserInfo(data.name);
  }, []);
  return (
    // <UserContext.Provider value={{ loggedInUser: userInfo }}>
    //   <div className="app">
    //     <Header />
    //     <Outlet />
    //   </div>
    // </UserContext.Provider>

    // <div className="app">
    //   <UserContext.Provider value={{ loggedInUser: userInfo }}>
    //     <Header />
    //   </UserContext.Provider>
    //   <Outlet />
    // </div>
   
<UserContext.Provider value={{ loggedInUser: userInfo , setUserInfo}}>
    <div className="app">
      <UserContext.Provider value={{ loggedInUser: "Nani" }}>
        <Header />
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>

    
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
        // element: <Suspense fallback={<Shimmer/>}> <Grocery /> </Suspense>,
      },
      {
        path: "/restaurants/:resId", //dynamic path
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
// const heading = React.createElement("h1",{id:"heading"},"Hello Bunny")
// console.log(heading)
//REACT ELEMENT
// const jsxHeading = (
//   <h1 id="heading" className="name">
//     Hello jsx this is heading child
//   </h1>
// );
// const jsxHeading1 = (
//   <h1 id="heading" className="name">
//     {jsxHeading}
//     Hello jsx this is parent
//   </h1>
// );

// const elem = <span>Span comp</span>;

//REACT COMPONENT
//class based component

//functional component
// const Title = () => (
//   <h1 id="heading" className="name">
//     Hello jsx
//   </h1>
// );
// const number = 4;
//component composition
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <Title></Title>
//     {Title()}
//     {jsxHeading1}
//     <h2> {number + 3445}</h2>
//     {elem}

//     <h2> {console.log("hello consloe")}</h2>
//     <h1 className="heading">Functional Component</h1>
//   </div>
// );

// console.log(jsxHeading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

// root.render(heading)
// root.render(jsxHeading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "hello" },
//   "Hello world"
// );
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hi iam PARCEL"),
//     React.createElement("h2", {}, "Hi iam h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Hi iam h1 tag"),
//     React.createElement("h2", {}, "Hi iam h2 tag"),
//   ]),
// ]);
// console.log(heading);
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("header"));

// root.render(heading);
// root.render(parent);
