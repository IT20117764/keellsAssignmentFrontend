import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import Employees from './components/Employees';
import AddDepartment from './components/AddDepartment';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
            <Route exact path="/addemp"  element={<AddEmployee/>}/>
            <Route exact path="/employees"  element={<Employees/>}/>
            <Route exact path="/employees"  element={<Employees/>}/>
            <Route exact path="/adddepartment"  element={<AddDepartment/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

