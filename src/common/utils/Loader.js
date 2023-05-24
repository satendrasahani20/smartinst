import React from 'react'
import ReactLoading from 'react-loading';
const Loader = ({ type="bubbles", color="#fff" ,className="loader-btn"}) => {
  return (
    <ReactLoading type={type}
     color={color} 
     height={'20%'}
      width={'20%'} 
      className={className}/>
  )
}

export default Loader