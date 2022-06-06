import { useState } from "react";
import './NewTestimonyForm.css';
import { FaStar } from "react-icons/fa";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

export default function NewTestimonyForm({ addTestimony }) {
    const [newTestimony, setNewTestimony] = useState({
      text: "",
    });
  
    function handleAddTestimony(evt) {
      evt.preventDefault();
      addTestimony(newTestimony);
      setNewTestimony("");
    }

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  return (
    <>
    <h2> Share your Experience </h2>
    <form onSubmit={handleAddTestimony}>
    <div className="testimony-container">
      <input>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            /> 
          )
        })}
      </input>
      <input
      value={newTestimony.text}
      placeholder="What's your experience?"
      onChange={(e) => setNewTestimony(e.target.value)}
      />
      <button className="testimony-button" type="submit">
        Submit
      </button>
    </div>
    </form>
            </>
  );
};


