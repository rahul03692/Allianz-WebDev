import {useContext} from 'react';
import { DataContext } from '../contexts/dataContext';
import { AnsContext } from '../contexts/ansContext';

const Item = ({item}) => {

    const {removeData} = useContext(DataContext);
    const {addAnsData} = useContext(AnsContext);

    const handleClick = (id) => {
        //if it is added to ans then only remove from data
        if(addAnsData(item)) removeData(id);
    }

    return (
        <div className="itemClass" id = {item._id} onClick={() => handleClick(item._id)}>
            <h3>{item.name}</h3>
            <p>{item.value}</p>
        </div>
    );
    
}

export default Item;