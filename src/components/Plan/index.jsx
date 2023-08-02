import React, { useState } from 'react';
import { Typography, Card, CardContent, Switch, Container } from '@mui/material';
import Advanced from '../../assets/images/Plan/advanced.svg';
import Arcade from '../../assets/images/Plan/arcade.svg';
import Pro from '../../assets/images/Plan/pro.svg';
import { useAppContext } from '../../Context/Context';

import './styles.scss';

const PlanSelection = () => {
    const [selectedPlan, setSelectedPlan] = useState('Monthly');
    const [selectedCard, setSelectedCard] = useState(null);
    const { formData, setFormData } = useAppContext();

    const handlePlanChange = () => {
        setSelectedPlan((prevSelectedPlan) => {
            setSelectedCard(null);
            const pricePlan = selectedCard ? (prevSelectedPlan === 'Monthly' ? selectedCard.priceMonthly : selectedCard.priceYearly) : '';
            setFormData((prevFormData) => ({
                ...prevFormData,
                planFrequency: prevSelectedPlan === 'Monthly' ? 'Yearly' : 'Monthly',
                pricePlan,
            }));
            return prevSelectedPlan === 'Monthly' ? 'Yearly' : 'Monthly';
        });
    };

    const arrayCards = [
        {
            icon: Arcade,
            title: 'Arcade',
            priceMonthly: 9,
            priceYearly: 90,
            discount: '2 months free',
        },
        {
            icon: Advanced,
            title: 'Advanced',
            priceMonthly: 12,
            priceYearly: 120,
            discount: '2 months free',
        },
        {
            icon: Pro,
            title: 'Pro',
            priceMonthly: 15,
            priceYearly: 150,
            discount: '2 months free',
        },
    ];

    const handleCardClick = (index) => {
        setSelectedCard(arrayCards[index]);
        const pricePlan = selectedPlan === 'Monthly' ? arrayCards[index].priceMonthly : arrayCards[index].priceYearly;
        setFormData((prevFormData) => ({
            ...prevFormData,
            plan: arrayCards[index].title,
            pricePlan,
        }));
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
                                {selectedPlan === 'Yearly' ? `$${card.priceYearly}/yr` : `$${card.priceMonthly}/mo`}
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
