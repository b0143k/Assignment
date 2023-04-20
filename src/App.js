import logo from './logo.svg';
import './App.css';
import ReactLogo from './React-Logo/ReactLogo';
import ReactBenefits from './React benefits/ReactBenefits';
import Button from './Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
  
        <ReactLogo />
        
        <p>
          Benefits of react
        </p>
        <ReactBenefits />
        <Button />


      </header>
    </div>
  );
}

export default App;
