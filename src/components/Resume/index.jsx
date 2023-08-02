import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
import { useAppContext } from '../../Context/Context';

import './styles.scss';

const Resume = () => {
    const { formData, setFormData } = useAppContext();

    const handleStepChange = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            step: 0,
        }));
    };

    const totalPrice = () => {
        const priceAddons = formData.addons.reduce((acc, addon) => acc + addon.price, 0);
        const pricePlan = formData.pricePlan
        return priceAddons + pricePlan;
    }



    return (
        <div className="finishing-up-container">
            <Typography variant="h1" className="finishing-up-title">
                Finishing up
            </Typography>
            <Typography variant="body1" className="finishing-up-description">
                Double-check everything looks OK before confirming.
            </Typography>

            <TableContainer component={Paper} className="finishing-up-table">
                <Table>
                    <TableHead className='planResume'>
                        <TableRow className="planResume__left">
                            <TableCell>{formData.plan}</TableCell>
                            <TableCell>
                                <Link onClick={handleStepChange} className="change-link">Change</Link>
                            </TableCell>
                        </TableRow>
                        <TableRow className="planResume__right">
                            <TableCell align="right">{formData.planFrequency === 'Monthly' ? `$${formData.pricePlan}/mo` : `$${formData.pricePlan}/yr`}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {formData.addons.map((addon, index) => (
                            <TableRow key={index}>
                                <TableCell>{addon.name}</TableCell>
                                <TableCell align="right">{formData.planFrequency === 'Monthly' ? `$${addon.price}/mo` : `$${addon.price}/yr`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="footer">
                <Typography variant="body1" className="footer__left">
                    Total {formData.planFrequency === 'Monthly' ? '(per month)' : '(per year)'}
                </Typography>
                <Typography variant="body1" className="footer__right">
                    {formData.planFrequency === 'Monthly' ? `$${totalPrice()}/mo` : `$${totalPrice()}/yr`}
                </Typography>
            </div>
        </div>
    );
};

export { Resume };
