import './App.css';
import { MuiButton } from './Components/MuiButton';
import { MuiSelect } from './Components/MuiSelect';
import { MuiTextField } from './Components/MuiTextField';
import { MuiTypo } from './Components/MuiTypo';
import { MuiRadio } from './Components/MuiRadio';
import { MuiCheck } from './Components/MuiCheck';

function App() {
  return (
    <div className="App">
      <MuiTypo />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadio />
      <MuiCheck />
    </div>
  );
}

export default App;
