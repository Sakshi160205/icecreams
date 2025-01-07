import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Read = () => {
  const [orders, setOrders] = useState([])

const navigate = useNavigate()

  const getData = async () => {
    const res = await axios.get('https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/cake')
    setOrders(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const deleted = async(id) =>{
   await axios.delete(`https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/cake/${id}`)
   getData()
  }



  

  return (
    <div>
      <table style={{ border: '2px solid black', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', border: '1px solid black', backgroundColor: '#f2f2f2' }}>Order Id</th>
            <th style={{ padding: '8px', border: '1px solid black', backgroundColor: '#f2f2f2' }}>Cake</th>
            <th style={{ padding: '8px', border: '1px solid black', backgroundColor: '#f2f2f2' }}>Weight</th>
            <th style={{ padding: '8px', border: '1px solid black', backgroundColor: '#f2f2f2' }} colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
      {
        orders.map((order)=>{
         
        return(
          <tr key={order.id}>
          <td style={{ padding: '8px', border: '1px solid black' }}>{order.id}</td>
          <td style={{ padding: '8px', border: '1px solid black' }}>{order.name}</td>
          <td style={{ padding: '8px', border: '1px solid black' }}>{order.weight}</td>
          <td style={{ padding: '8px', border: '1px solid black', cursor: 'pointer', color: 'blue' }} onClick={()=>{navigate(`/update/${order.id}`)}}>Edit</td>
          <td style={{ padding: '8px', border: '1px solid black', cursor: 'pointer', color: 'red' }} onClick={()=>{deleted(order.id)}}>Delete</td>
        </tr>
        )
        })
      }
        </tbody>
      </table>
    </div>
  )
}

export default Read