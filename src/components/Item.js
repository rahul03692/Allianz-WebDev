//import { useContext } from "react";
// import { DataContext } from "../contexts/dataContext";
// import { AnsContext } from "../contexts/ansContext";

const Item = ({ item }) => {
//   const { removeData } = useContext(DataContext);
//   const { addAnsData } = useContext(AnsContext);

  //   const handleClick = (id) => {
  //     //if it is added to ans then only remove from data
  //     if (addAnsData(item)) removeData(id);
  //   };

  const OnDragStart = (event) => {
    event.dataTransfer.setData("id", event.target.id);
    //console.log("ondrag started");
  };

  const OnDragOver = (event) => {
    event.preventDefault();
  };

//   const OnDrop = (event) => {
//     event.preventDefault();
//     console.log("on drop");
//     console.log(event.target.className);
//     console.log(event.dataTransfer.getData("id"));
//     if (event.target.className === "ansList") {
//       var id = event.dataTransfer.getData("id");
//       addAnsData(item);
//       removeData(id);
//     }
//   };

  return (
    <div
      className="itemClass"
      id={item._id}
      //onClick={() => handleClick(item._id)}
      draggable="true"
      onDragStart={OnDragStart}
      onDragOver={OnDragOver}
      //onDragEnter={OnDragEnter}
      //onDrop={OnDrop}
    >
      <h3>{item.name}</h3>
      <p>{item.value}</p>
    </div>
  );
};

export default Item;
