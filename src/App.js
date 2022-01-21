import "./App.css";
import AnsList from "./components/ansList";
import DataList from "./components/dataList";
import OperatorList from "./components/operatorList";
import DataContextProvider from "./contexts/dataContext";
import AnsContextProvider from "./contexts/ansContext";
import CalculateAns from "./components/calculateAns";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <AnsContextProvider>
        <DataContextProvider>
          <DataList />
          <OperatorList />
          <AnsList />
          <CalculateAns />
        </DataContextProvider>
      </AnsContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
