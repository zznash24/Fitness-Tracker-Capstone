import "./App.css";

function App() {
  
  let callBackend = (e) => {
    fetch('http://localhost:3001/').then(res => res.json()).then(data => {
      console.log(data)
    })
  } 

  return (

    <div className="App">
      <header className="App-header"></header>
      <div>
        <button onClick={callBackend}>
          
        </button>

      </div>
    
      

    </div>
  );
}

export default App;
