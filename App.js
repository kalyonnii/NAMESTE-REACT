// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "hello" },
//   "Hello world"
// );
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi iam h1 tag"),
    React.createElement("h2", {}, "Hi iam h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi iam h1 tag"),
    React.createElement("h2", {}, "Hi iam h2 tag"),
  ]),
]);
// console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(document.getElementById("header"));

// root.render(heading);
root.render(parent);
