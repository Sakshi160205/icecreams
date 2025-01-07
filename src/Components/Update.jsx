import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Update = () => {

  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')


  const {id} = useParams()

  console.log(id,"me ye fetch kr raha hu")


  const getData = async () => {
    const res = await axios.get(`https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/cake/${id}`)
    setName(res.data.name || "")
    setWeight(res.data.weight || "")
   
  }

  useEffect(()=>{
  getData()
  },[])

  const updateData = async (e) => {
    e.preventDefault()
    await axios.put(`https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/cake/${id}`,{name:name,weight:weight})
    alert('apka order swikar kar liya gaya hai 🥙')
  }

  return (
    <div>

      <h1>Update Information 🍰</h1>

      <form onSubmit={updateData}>

        <input type='text' value={name} placeholder='Enter Your Cake Name...🎂' onChange={(e) => { setName(e.target.value) }} />
        <br />
        <br />
        <input type='text' value={weight} placeholder='Enter Your Cake Weight (In kg/gm)' onChange={(e) => { setWeight(e.target.value) }} />
        <br />
        <br />
        <input type='submit'  value={'Update Order 🛒'} />
      </form>

    </div>
  )
}

export default Update