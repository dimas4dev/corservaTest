import React from 'react';
import { Typography, Card, CardContent, Checkbox } from '@mui/material';
import './styles.scss';

const AddonCard = ({ addonName, addonDescription, addonPrice, addonSelected, handleCheckboxChange }) => {
    return (
        <Card className={`addon-card ${addonSelected ? 'addon-selected' : ''}`}>
            <CardContent className="addon-content">
                <div className="addon-info">
                    <div className="addon-check">
                        <Checkbox
                            color="primary"
                            className="addon-checkbox"
                            checked={addonSelected}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <div className="addonText">
                        <Typography variant="h6" className="addon-name">
                            {addonName}
                        </Typography>
                        <Typography variant="body2" className="addon-description">
                            {addonDescription}
                        </Typography>
                    </div>
                </div>
                <div className="addon-cost">
                    <Typography variant="body2" className="addon-price">
                        {addonPrice}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default AddonCard;
