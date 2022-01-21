import Item from "./Item";
import React, { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import "./styles.css";

const DataList = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="dataList">
      {data ?
        data.map((item) => {
          item.isOperator = 0;
          return <Item item={item} key={item._id} />;
        }) :
        <div> Loading ....... </div>
        }
    </div>
  );
};

export default DataList;
