import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { AnsContext } from "../contexts/ansContext";
import "./styles.css";

const AnsItem = ({ item }) => {
  const { addData } = useContext(DataContext);
  const {removeAnsData } = useContext(AnsContext);


  const handleClick = (id) => {
    if (item.isOperator || item.isInput) {
      removeAnsData(id);
    }
    else{
      removeAnsData(id);
      addData(item); 
    }
  };

  return (
    <div
      className="itemClass"
      id={item._id}
      onClick={() => handleClick(item._id)}
    >
      <h3>{item.name}</h3>
      <p>{item.value}</p>
    </div>
  );
};

export default AnsItem;
