
import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <div class="card">
        <div class="card-body ">
          <h5 class="card-title center">{props.title}</h5>
          <p class="card-text">{props.body}</p>
          <p class="card-text">{props.footer}</p>
        </div>
      </div>  
    </>
  )
}

export default ServiceCard;