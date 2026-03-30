
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
function App() {
 function handleClick(){
  alert('I am clicked.');
 };

 const handleClick3=()=>{
  alert("clicked 3");
 }

 const handleAdd5 =(num)=>{
  const newNum=num+5;
  alert(newNum);
 }

  return (
    <>
     <Batsman></Batsman>
     <Counter></Counter>
    <h1>Vite + React</h1>
    <button onClick={handleClick}>Click me-1</button>
    <button onClick={function handClick2(){
      alert("clicked -2")
    }}>Click me-2</button>
    <button onClick={handleClick3}>Click me -3</button>
    <button onClick={()=>alert('click 4')}>Click me -3</button>
    <button onClick={()=>handleAdd5(7)}>Click me -4</button>

    </>
  )
}

export default App
