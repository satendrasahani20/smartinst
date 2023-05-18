import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [name,setName]=useState("")
    useEffect(()=>{
      setName("Satendra")
    },[])
  return (
    <div>This is Dashboard {name}</div>
  )
}

export default Dashboard