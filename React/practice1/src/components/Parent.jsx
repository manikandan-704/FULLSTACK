import Child from "./Child.jsx";

function Parent() {
  const getData = (msg) => alert(msg);
  return <Child data={getData} name="Manikandan N" role="MERN Stack Dev" />;
}
export default Parent;
