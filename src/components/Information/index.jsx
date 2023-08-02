import React, { useState } from 'react';
import { Typography, TextField, Button, Container } from '@mui/material';
import { useAppContext } from '../../Context/Context';

import './styles.scss';
import StepButton from '../StepButton';

const PersonalInformationForm = () => {

    const { formData, setFormData } = useAppContext();


    const [touchedFields, setTouchedFields] = useState({
        name: false,
        email: false,
        phoneNumber: false,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleInputBlur = (event) => {
        const { name } = event.target;
        setTouchedFields({ ...touchedFields, [name]: true });
    };

    const isFormValid = () => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.phoneNumber.trim() !== ''
        );
    };

    const handleSubmit = () => {
        if (isFormValid()) {
            setFormData({ ...formData, step: 2 });
        } else {
            alert('Por favor, complete todos los campos antes de enviar el formulario.');
        }
    };

    return (
        <Container className="form-container">
            <Typography variant="h1" className="form-header">
                Personal Information
            </Typography>
            <Typography variant="body1" className="form-description">
                Please provide your name, email address, and phone number.
            </Typography>
            <form className="form">
                <div className="input-group">
                    <TextField
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="form-input"
                        fullWidth
                        required
                    />
                    {touchedFields.name && formData.name.trim() === '' && (
                        <Typography variant="body1" className="form-alert">
                            This field is required
                        </Typography>
                    )}
                </div>

                <div className="input-group">
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="form-input"
                        fullWidth
                        required
                    />
                    {touchedFields.email && formData.email.trim() === '' && (
                        <Typography variant="body1" className="form-alert">
                            This field is required
                        </Typography>
                    )}
                </div>

                <div className="input-group">
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        className="form-input"
                        fullWidth
                        required
                    />
                    {touchedFields.phoneNumber && formData.phoneNumber.trim() === '' && (
                        <Typography variant="body1" className="form-alert">
                            This field is required
                        </Typography>
                    )}
                </div>
            </form>
        </Container>
    );
};

export { PersonalInformationForm };
