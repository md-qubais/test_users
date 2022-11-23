import React from "react";

const Card = ({ name, age, email,img }) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div className="App">
      <div id="img">
        <img id="propic" src={img} />
      </div>
      <div id="details">
        <p>Name:{name}</p>
        <p>Email:{email}</p>
        <button
          onClick={() => {
            setToggle((prevState) => {
              return !prevState;
            });
          }}
        >
          Toggle Age
        </button>
        <h3>{toggle && <>age : {age}</>}</h3>
      </div>
    </div>
  );
};

export default Card;
