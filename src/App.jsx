import { ThemeProvider, createTheme, Button } from '@mui/material';

import { StepBar } from './components/StepBar/StepBar.jsx';
import { PersonalInformationForm } from './components/Information/index.jsx';
import { PlanSelection } from './components/Plan/index.jsx';
import { AddOns } from './components/AddsOn/index.jsx';
import { Resume } from './components/Resume/index.jsx';
import { compile } from 'sass';
import { Congrats } from './components/Congrats/index.jsx';
import { useAppContext } from './Context/Context.jsx';


import './App.scss'
import StepButton from './components/StepButton/index.jsx';

export default function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'Ubuntu, sans-serif', // Aquí puedes especificar la fuente que desees
      h1: {
        fontSize: '32px',
        fontWeight: 700
      }
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: 'none'
          }
        }
      }
    }

  });

  const { formData, setFormData } = useAppContext();


  const isFormValid = () => {

    console.log(formData);
    return (
      formData.name.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phoneNumber.trim() !== ''
    );
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      if (formData.step < 4) {
        setFormData({ ...formData, step: formData.step + 1 });
      }
    } else {
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
    }
  };

  return (
    <>

      <ThemeProvider theme={theme}>
        <div className="app">
          <div className="app__stepBar">
            <StepBar />
          </div>
          <div className="app__content">
            {formData.step === 0 && <PersonalInformationForm />}
            {formData.step === 1 && <PlanSelection />}
            {formData.step === 2 && <AddOns />}
            {formData.step === 3 && <Resume />}
            {formData.step === 4 && <Congrats />}
            <div className="inputButtons">
              <StepButton onClick={handleSubmit} currentStep={formData.step} />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  );
}
