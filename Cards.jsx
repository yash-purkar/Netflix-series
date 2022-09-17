import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="Img" className="card-img" />
          <div className="card-info">
            <span className="card-category">{props.title}</span>
            <h3>{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
