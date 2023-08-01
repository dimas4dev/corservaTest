import { StepBar } from './components/StepBar/StepBar.jsx';
import { PersonalInformationForm } from './components/Information/index.jsx';

import './App.scss'


export default function App() {


  return (
    <>
      <div className="app">
        <div className="app__stepBar">
          <StepBar />
        </div>
        <div className="app__content">
          {/* <PersonalInformationForm /> */}
        </div>
      </div>
    </>
  );
}
