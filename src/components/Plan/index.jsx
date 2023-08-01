import React, { useState } from 'react';
import { Typography, Card, CardContent, Switch, Container } from '@mui/material';
import Advanced from '../../assets/images/Plan/advanced.svg';
import Arcade from '../../assets/images/Plan/arcade.svg';
import Pro from '../../assets/images/Plan/pro.svg';
import './styles.scss';

const PlanSelection = () => {
    const [selectedPlan, setSelectedPlan] = useState('Monthly');
    const [selectedCard, setSelectedCard] = useState(null);

    const handlePlanChange = () => {
        setSelectedPlan(selectedPlan === 'Monthly' ? 'Yearly' : 'Monthly');
        setSelectedCard(null); // Deseleccionar cualquier tarjeta previamente seleccionada al cambiar el plan
    };

    const arrayCards = [
        {
            icon: Arcade,
            title: 'Arcade',
            priceMonthly: '$9/mo',
            priceYearly: '$90/yr',
            discount: '2 months free',
        },
        {
            icon: Advanced,
            title: 'Advanced',
            priceMonthly: '$12/mo',
            priceYearly: '$120/yr',
            discount: '2 months free',
        },
        {
            icon: Pro,
            title: 'Pro',
            priceMonthly: '$15/mo',
            priceYearly: '$150/yr',
            discount: '2 months free',
        },
    ];

    const handleCardClick = (index) => {
        setSelectedCard(arrayCards[index]);
    };

    return (
        <Container className="plan-container">
            <Typography variant="h1" className="plan-title">
                Select your plan
            </Typography>
            <Typography variant="body1" className="plan-description">
                You have the option of monthly or yearly billing.
            </Typography>
            <div className="card-container">
                {arrayCards.map((card, index) => (
                    <Card
                        key={index}
                        className={`plan-card ${selectedCard?.title === card.title ? 'selected' : ''}`}
                        onClick={() => handleCardClick(index)}
                    >

                        <CardContent className="card-content">
                            <img src={card.icon} alt={card.title} className="icon" />
                            <Typography variant="h6" className="card-title">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" className="card-price">
                                {selectedPlan === 'Yearly' ? card.priceYearly : card.priceMonthly}
                            </Typography>
                            <Typography variant="body2" className="card-discount">
                                {selectedPlan === 'Yearly' ? card.discount : ''}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="switch-container">
                <Typography variant="body1" className="switch-label">
                    Billing Frequency:
                </Typography>
                <Switch
                    checked={selectedPlan === 'Yearly'}
                    onChange={handlePlanChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'monthly-yearly-switch' }}
                />
                <Typography variant="body1" className="switch-label">
                    {selectedPlan === 'Yearly' ? 'Yearly' : 'Monthly'}
                </Typography>
            </div>
        </Container>
    );
};

export { PlanSelection };
