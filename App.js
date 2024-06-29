// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

const parent = React.createElement("div", { id: "parent", className: "sdcw" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

console.log(parent); // reactElement return an object.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // reactElement object will be converted to html element using react-DOM.
