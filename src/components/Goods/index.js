import React from "react";
import "./index.css";
import GoodsCell from "../GoodsCell";

class Goods extends React.Component {

  render() {


    return (
      <div className="Goods">
        <h2>Trendy Arrivals</h2>
        <div className="GoodsContainer">
          <GoodsCell
            img="./img/png/bags/1.png"
            goodsName="Black Genuine Leather Bags"
            price="$ 23.20"
          />
          <GoodsCell
            img="./img/png/bags/2.png"
            goodsName="Fashion Red Leather Bags"
            price="$ 20.16"
          />
          <GoodsCell
            img="./img/png/bags/3.png"
            goodsName="Fashion Genuine Leather Bags"
            price="$ 30.14"
          />
          <GoodsCell
            img="./img/png/bags/4.png"
            goodsName="Simply Leather Bags"
            price="$ 15.20"
          />
          <GoodsCell
            img="./img/png/bags/5.png"
            goodsName="New Fashion Leather Bags"
            price="$ 25.20"
          />
          <GoodsCell
            img="./img/png/bags/6.png"
            goodsName="Single Hand Models Bags"
            price="$ 17.6"
          />
        </div>
      </div>
    )
  }
}

export default Goods;
