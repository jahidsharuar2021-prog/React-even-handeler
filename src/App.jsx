
import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';

// const fetchUser=fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())

// const fetchFriends=async()=>{
//   const res=await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }
 
const fetchPost=async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {

  const postPromise=fetchPost();

// const friendsPromise=fetchFriends();

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
     
     <Suspense fallback={<h4>posts are coming don't scroll</h4>}>
     <Posts  postPromise={ postPromise}></Posts>
     </Suspense>

     {/* <Suspense fallback={<h3>Loading ...</h3>}>
       <Users fetchUser={fetchUser}></Users>
     </Suspense>

     <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
      <Friends friendsPromise={friendsPromise}></Friends>
     </Suspense> */}

    
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
