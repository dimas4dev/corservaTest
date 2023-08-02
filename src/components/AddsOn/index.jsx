import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import AddonCard from '../AddonCard';
import './styles.scss';
import { useAppContext } from '../../Context/Context';

const AddOns = () => {
    const [addonStates, setAddonStates] = useState([
        { name: 'Online service', description: 'Access to multiplayer games', price: 1, selected: false },
        { name: 'Larger storage', description: 'Extra 1TB of cloud save', price: 2, selected: false },
        { name: 'Customizable profile', description: 'Custom theme on your profile', price: 2, selected: false },
    ]);

    const { formData, setFormData } = useAppContext();

    useEffect(() => {
        // Actualizar el estado del contexto formData con la información de los addons seleccionados
        const updatedAddons = addonStates.filter((addon) => addon.selected);
        setFormData((prevFormData) => ({
            ...prevFormData,
            addons: updatedAddons,
        }));
    }, [addonStates, setFormData]);

    const handleCheckboxChange = (index) => {
        setAddonStates((prevStates) =>
            prevStates.map((addon, i) =>
                i === index ? { ...addon, selected: !addon.selected } : addon
            )
        );
    };

    return (
        <Container className="addons-container">
            <Typography variant="h1" className="addons-title">
                Pick add-ons
            </Typography>
            <Typography variant="body1" className="addons-description">
                Add-ons help enhance your gaming experience.
            </Typography>

            {addonStates.map((addon, index) => (
                <AddonCard
                    key={index}
                    addonSelected={addon.selected}
                    addonName={addon.name}
                    addonDescription={addon.description}
                    addonPrice={formData.planFrequency === 'Monthly' ? `$${addon.price}/month` : `$${addon.price}/yearly`}
                    handleCheckboxChange={() => handleCheckboxChange(index)}
                />
            ))}
        </Container>
    );
};

export { AddOns };
