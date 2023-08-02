import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useAppContext } from '../../Context/Context';
import './styles.scss';

const StepButton = ({ onClick, currentStep }) => {

    const [disabledPrevButton, setDisabledPrevButton] = useState(false);
    const [disabledNextButton, setDisabledNextButton] = useState(false);
    const { formData, setFormData } = useAppContext();


    const handleButtonClick = () => {
        // Aquí puedes realizar acciones adicionales antes de ejecutar el onClick
        onClick();
    };

    // Determina si el botón debe estar deshabilitado según las condiciones de tu aplicación
    // Por ejemplo, el botón estará deshabilitado si algún campo requerido está vacío

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const isButtonDisabled = () => {

        if (currentStep === 1) {
            setDisabledPrevButton(true);
        }
        else {
            setDisabledPrevButton(false);
        }

    };

    const handlePrevButton = () => {
        console.log(currentStep, 'currentStep');
        if (currentStep > 1) {
            setFormData({ ...formData, step: currentStep - 1 });
            console.log(currentStep, 'currentStep');

        }
    }

    useEffect(() => { isButtonDisabled() }, [currentStep, isButtonDisabled]);

    return (<>
        <Button
            variant="contained"
            className='prevButton'
            onClick={handlePrevButton}
            disabled={disabledPrevButton}
        >
            Previous Step
        </Button>
        <Button
            variant="contained"
            className='nextButton'
            onClick={handleButtonClick}
            disabled={disabledNextButton}
        >
            Next Step
        </Button>
    </>
    );
};

export default StepButton;
