import './App.css'
import LogLevel from './LogLevel';
import PersonDetails from './PersonDetails'
import Teams from './Teams';
import Home from './Home'
import Parent from './Parent';
import Child from './Child';

function App() {
  const details = {
    Fname: "Umar",
    Lname : "Ahmad",
    Age:25,
    isVegan:true,
    eligible:false,
    id:{
      rel_id:"abs123",
      fake_id:"bsd432"
    }
  }

  const IPL = ["CSK", "MI", "RCB"];
  const score = [200, 210, 300];

  const teamsDetails = [
    {
      team:"CSK",
      clr:"Yellow",
      score:10
  },
  {
    team:"MI",
    clr:"Blue",
    score:20
  },
  {
    team:"RCB",
    clr:"Red",
    score:30
  }
]

  return (
    <>
    <div className='app'>
      {/* Basic props types */}
      {/* <Home name="Umar" age={25} isEligible={true} id="1212jhxcjh12"/> */}
      {/* suppose i dont want to display age in home comp afterthat we will get error from home comp */}
      {/* <Home name="Umar" isEligible={true} id="1212jhxcjh12"/> */}

      {/* Object and array props types */}
      {/* <PersonDetails details = {details}/> */}
      {/* <Teams IPL={IPL} score={score} teamsDetails = {teamsDetails}/> */}
      
      {/* Conditional props types */}
      {/* <LogLevel status="error"/> */}

      {/* Component props types */}
      <Parent children={<Child />}/>
      </div> 
    </>
  )
}

export default App
