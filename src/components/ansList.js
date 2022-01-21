import AnsItem from "./ansItem";
import {useContext} from 'react';
import {AnsContext} from '../contexts/ansContext';

const AnsList = () => {

  const {ansData} = useContext(AnsContext);

  return (
    <div className="ansList">
      {ansData && ansData.map((item) => <AnsItem item={item} key={item._id} />)}
    </div>
  );
};

export default AnsList;
