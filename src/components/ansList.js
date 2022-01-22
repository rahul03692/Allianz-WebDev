import AnsItem from "./ansItem";
import {useContext} from 'react';
import {AnsContext} from '../contexts/ansContext';
import {DataContext} from '../contexts/dataContext';

const AnsList = () => {

  const {data,removeData } = useContext(DataContext);
  const {ansData,addAnsData} = useContext(AnsContext);

  const OnDrop = (event) => {
    event.preventDefault();
    // console.log("on drop");
    // console.log(event.target.className);
    // console.log(event.dataTransfer.getData("id"));
    if (event.target.className === "ansList") {
      var id = event.dataTransfer.getData("id");

      var item = data.filter((ele) => ele._id === id);
      addAnsData(item[0]);
      removeData(id);
    }
  };

  const OnDragOver = (event) => {
    event.preventDefault();
  }

  return (
    <div className="ansList" onDrop={OnDrop} onDragOver={OnDragOver}>
      {ansData && ansData.map((item) => <AnsItem item={item} key={item._id} />)}
    </div>
  );
};

export default AnsList;
