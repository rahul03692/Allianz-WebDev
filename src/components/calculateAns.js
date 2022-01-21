import {useContext} from 'react';
import {AnsContext} from '../contexts/ansContext';
import './styles.css';
//import {DataContext} from '../contexts/dataContext';

const CalculateAns = () => {

  const {ansData} = useContext(AnsContext);
  //const {addData} = useContext(DataContext);

  const handleClick = () => {
    var ans = "";

    var n = ansData.length;
    
    for(let i=0;i<n;i++){

      if(ansData[i].isOperator || ansData[i].isInput){
        ans+=ansData[i].name;
      }
      else{
        ans+=ansData[i].value;
      }

    }

    //console.log(ans);

    alert("answer is " + eval(ans));
    window.location.reload();

  }

  return(
    <div className="calButton">
      <button className="buttonClass" onClick={handleClick}>Calculate</button>
    </div>
  );

}

export default CalculateAns;