import React from "react";
import "./index.css";
import Button from "../Button";

class GoodsCell extends React.Component {

  render() {
    const {
      img,
      goodsName,
      price
    } = this.props;

    return(
      <div className="cell">
        <figure>
          <div id="icons">
            <img className="icon" src="./img/svg/like.svg" />
            <img className="icon" src="./img/svg/comment.svg" />
          </div>
          <div className="imgWrap">
            <img src={img} alt="Goods" />
          </div>
          <figcaption>{goodsName}</figcaption>
          <p>{price}</p>
        </figure>
        <Button
          classN="buyButton"
        >
          Add to Cart
        </Button>
      </div>
    )
  }
}

export default GoodsCell;
