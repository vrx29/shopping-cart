import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import "./GridItem.css";


function GridItem({ item }) {
  const [showCardActions, setShowCardActions] = useState(false);
  return (
    <div
      className="grid-item"
      onMouseEnter={() => setShowCardActions(true)}
      onMouseLeave={() => setShowCardActions(false)}
    >
      <div className="item-image-cont">
        <img src={item.src} alt="demo" />
        <div
          className="item-btns"
          style={{ display: showCardActions ? "flex" : "none" }}
        >
          <div className="item-btn">
            <AiOutlineHeart />
          </div>
          <div className="item-btn">
            <BsCart3 />
          </div>
        </div>
      </div>
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.price}</p>
      </div>
    </div>
  );
}

export default GridItem;
