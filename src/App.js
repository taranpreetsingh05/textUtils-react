import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/Alert'
import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
let name="Taran";
function App() {
  const [mode,setMode]=useState('light');//whether dark mode is eabled on it
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const removebodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const toggleMode=(cls)=>{
    removebodyclasses()
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      showAlert("dark mode has been enabled","success")
      // document.title="dark mode"
    }
    else {setMode('light');
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert("light mode has been enabled","success")
      // document.title="light mode"
    }
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" text="about textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Switch>
   <Route exact path="/about">{/*always use exact as it is a good practice nd it allows u to access one componet only if it matches exactly*/ } 
    <About mode={mode}/>
  </Route>
  <Route exact path="/">
<Textform showAlert={showAlert} mode={mode} heading="enter the text to analyze"/>
  </Route>
</Switch>

{/* <About/> */}
</div>
</Router>
   </>
  );
}

export default App;
