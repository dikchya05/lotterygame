// import {useEffect, useState} from 'react'

// const App =()=> {
//   const [tickets, setTickets] = useState([])
//   const fetchTicket = (order, limit)=>{
//     fetch('http://localhost:3000/ticket').then(res=> res.json())
//     .then(data=> setTickets(data.ticketList))
//   }

//   useEffect(()=>{
//     fetchTicket()
//   },[])

//   const generateRandom =()=>{
//     const a = Math.floor(Math.random()*5)
//     console.log(a)
//   }
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
