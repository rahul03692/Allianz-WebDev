import { useContext } from "react";
import "./styles.css";
import { AnsContext } from "../contexts/ansContext";
import { v4 as uuid } from "uuid";

const OperatorList = () => {
  //const [string,setString] = useState("");
  const { addAnsData } = useContext(AnsContext);

    //   function handleClick(str) {
  //     //const item = { name: str, isOperator: true, _id: uuid() };
  //     //addAnsData(item);
  //   }

  const OnDragStart = (event) => {
    //console.log(event.target["idx"]);
    var item = event.target.getAttribute("idx");
    //console.log(item);
    event.dataTransfer.setData("itemToAdd", item);
    //console.log("ondrag started");
  };

  const OnDragOver = (event) => {
    event.preventDefault();
  };

  const handleClickOperator = () => {
    var input = window.prompt("Enter a value: ");
    const item = { name: input, isInput: true, _id: uuid(), isOperator: 0 };
    addAnsData(item);
  };

  return (
    <div className="operatorList">
      <div
        className="operator"
        draggable="true"
        onDragStart={OnDragStart}
        onDragOver={OnDragOver}
        idx="+"
        //onClick={() => handleClick("+")}
      >
        {" "}
        <h1>+</h1>{" "}
      </div>
      <div
        className="operator"
        draggable="true"
        onDragStart={OnDragStart}
        onDragOver={OnDragOver}
        idx="-"
        //onClick={() => handleClick("-")}
      >
        {" "}
        <h1>-</h1>{" "}
      </div>
      <div
        className="operator"
        draggable="true"
        onDragStart={OnDragStart}
        onDragOver={OnDragOver}
        idx="<"
        //onClick={() => handleClick("<")}
      >
        {" "}
        <h1>&lt;</h1>{" "}
      </div>
      <div
        className="operator"
        draggable="true"
        onDragStart={OnDragStart}
        onDragOver={OnDragOver}
        idx=">"
        //onClick={() => handleClick(">")}
      >
        {" "}
        <h1>&gt;</h1>{" "}
      </div>
      <div className="operator" onClick={handleClickOperator}>
        {" "}
        <h3 className="textInOperator">Input</h3>{" "}
      </div>
    </div>
  );
};

export default OperatorList;
