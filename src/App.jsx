import { ThemeProvider, createTheme } from '@mui/material';
import { StepBar } from './components/StepBar/StepBar.jsx';
import { PersonalInformationForm } from './components/Information/index.jsx';

import './App.scss'
import { PlanSelection } from './components/Plan/index.jsx';


export default function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Ubuntu, sans-serif', // Aquí puedes especificar la fuente que desees
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="app__stepBar">
            <StepBar />
          </div>
          <div className="app__content">
            {/* <PersonalInformationForm /> */}
            <PlanSelection />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
