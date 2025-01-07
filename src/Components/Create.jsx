import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {

    const [name,setName] = useState('')
    const [weight,setWeight] = useState('')



    const sendData = async(e) =>{
    e.preventDefault()
    await axios.post('https://66b2f68a7fba54a5b7eaee35.mockapi.io/yes/cake',{name:name,weight:weight})
    alert('apka order swikar kar liya gaya hai 🥙')
    }




  return (
    <div>
        <h1>Create Information 🍰</h1>

        <form onSubmit={sendData}>
            
            <input type='text' placeholder='Enter Your Cake Name...🎂' onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <br/>
            <input type='text' placeholder='Enter Your Cake Weight (In kg/gm)' onChange={(e)=>{setWeight(e.target.value)}}/>
            <br/>
            <br/>
            <input type='submit' value={'Place Order 🛒'} />
        </form>
    </div>
  )
}

export default Create

