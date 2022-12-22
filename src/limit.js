// import {useEffect, useState} from 'react'

// const App =()=> {
//   const [users, setUsers] = useState([])
//   const fetchUser = (order, limit)=>{
//     fetch('http://localhost:3000/users?order='+order+'&limit='+limit).then(res=> res.json())
//     .then(data=> setUsers(data.usersList))
//   }

//   useEffect(()=>{
//     fetchUser()
//   },[])

//   return (
//     <>
//     <button onClick={()=>fetchUser('asc')}>
//       Ascending
//     </button>
//     {users.length>0 && users.map((item)=> <li>{item}</li>)}
//     <button>
//       Descending
//     </button>
//     <input type="text" placeholder="enter limit"
//       onKeyUp={(e)=> fetchUser(null, e.target.value)}
//     />
//     </>
//   );
// }
// export default App;