import './App.css';
import Table from './components/Table';
import Props from './components/Props';
import Cards from './components/Cards';
import City from './components/City';
import Color from './components/Color';

function App() {
  return (
    <div>
     <Table/>
     <Props name="Vlad" developer="Front-end"/>
     <Cards/>
     <City/>
     <Color/>
    </div>
  );
}

export default App;
