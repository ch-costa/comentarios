import React from 'react'

// TO DOver melhor functional satateless components

const  Comment = props => 
   <p className="well">
   {props.comment.comment}<br/> 
   por: <b>{props.comment.user.name}</b>
   </p>

export default Comment