import { useState, createContext } from "react";

export const AnsContext = createContext();

const AnsContextProvider = (props) => {
  const [ansData, setAnsData] = useState([]);

  const validateAdd = (ansData,data) => {
    
      if(ansData.length === 0){
        if(data.isOperator === 0) return 1;
        return 0;
      }
      
      var last = ansData[ansData.length - 1];

      if((last.isOperator && data.isOperator) || (last.isOperator === 0 && data.isOperator === 0)) return 0;
      return 1;

  } 

  const addAnsData = (data) => {
    if(validateAdd(ansData,data)){
      setAnsData([...ansData, data]);
      return 1;
    }
    else alert("ERROR : Can't Add");
    return 0;
  };

  const removeAnsData = (id) => {

    var idx = -1;

    var n = ansData.length;
    for(let i=0;i<n;i++){
      if(ansData[i]._id === id){
        idx=i;
        break;
      }

    }

    if(idx === n-1) setAnsData(ansData.filter((item) => item._id !== id));
    else alert("ERROR : Can't Remove");
  };

  return (
    <AnsContext.Provider value={{ ansData, addAnsData, removeAnsData }}>
      {props.children}
    </AnsContext.Provider>
  );
};

export default AnsContextProvider;
