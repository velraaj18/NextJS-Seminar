import React from 'react'

const accounts = ({params} : {params : {id? : string}}) => {
  return (
    <div> The id passed to this page is: {params.id}</div>
  )
}

export default accounts