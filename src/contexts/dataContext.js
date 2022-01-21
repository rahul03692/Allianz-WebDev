import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [data, setData] = useState([]);
  const url = "https://allianz--api.herokuapp.com/";

  useEffect(() => {
    console.log('useEffect ran');
    axios
      .get(url, { mode: "no-cors" })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e.message));
  }, [url]);

  const addData = (item) => {
    setData([...data,item]);
  }

  const removeData = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  return (
    <DataContext.Provider value={{ data, addData,removeData }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
