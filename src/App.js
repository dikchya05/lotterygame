// import {useEffect, useState} from 'react'

// const App =()=> {
//   const [tickets, setTickets] = useState([])
//   const fetchTicket = (order, limit)=>{
//     fetch('http://localhost:3000/ticket').then(res=> res.json())
//     .then(data=> setTickets(data.ticketList))
//   }
  
//   const generateRandom =()=>{
//     const a = Math.floor(Math.random()*5)
  
//   }

//   useEffect(()=>{
//     fetchTicket()
//   },[])

//   return (
//     <>
//     {tickets.length>0 ? tickets.map((item)=> {
//     return(
//     <div style={{backgroundColor:item.backgroundColor, margin:item.margin, width:'200px', height:'200px', textAlign:'center' }}>{item.ticket}</div>
//     )
//     }) : <h1>loading....</h1>
  
//     }
//       <button onClick={()=> generateRandom()}>Choose Winner</button>
//     </>
//   );
// }

// export default App;

import { Route, Link, Routes } from "react-router-dom";
import {useEffect, useState} from 'react'
import RegisterUser from "./containers/admin/registerUser";
import TicketWinner from "./containers/users/ticketWinner";
import AssignWinner from "./containers/admin/assignWinner";
import YupPractice from "./containers/admin/yupPractice";


const App =()=> {
  return (
    <>
        <Routes>
        
          <Route exact path="/" element={ <RegisterUser/> } />
          <Route exact path="/ticketWinner" element={ <TicketWinner/> } />
          <Route exact path="/assignwinner" element={<AssignWinner/>}/>
          <Route exact path="/yuppractice" element={<YupPractice/>}/>
        </Routes>
        
       
        
    </>
  );
}
export default App;
