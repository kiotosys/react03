import logo from './logo.svg';
import './App.css';
import C01componente from './components/C01componente';
import Variable from './components/C04variable';
import AppForm from './components/AppForm';

function App() {
  return (
    <div style={{background:"yellow", width:"350px", 
     padding:"10px"}}>
      <AppForm />
      <i class="large material-icons">insert_chart</i>
    </div>
  );
}

export default App;
