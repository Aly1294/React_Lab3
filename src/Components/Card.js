import React from 'react'

function Card({data}) {
  return (
    <div className="card me-5" style={{width: "18rem",marginBottom:"3rem"}}>
    <img className="card-img-top" style={{width: "18"}} src={data.thumbnail} alt="Product Image"/>
    <div className="card-body">
        <p className='card-title'>Title : {data.title}</p>
        <p className='card-title'>Price : {data.price}</p>
      <p className="card-text">Description : {data.description}</p>
      <button className="btn btn-primary">Do Something</button>
    </div>
  </div>
  )
}

export default Card