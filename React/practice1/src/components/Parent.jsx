import Child from "./Child.jsx";


function Parent() {
  const getData= msg=>alert(msg);
  return <Child data={getData}
        name="manikandan"
        role="Mern stack"/>
  
}
export default Parent;