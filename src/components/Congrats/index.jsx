import { Typography, Card, CardContent, CardMedia, Container } from '@mui/material';

import CongratsImage from '../../assets/images/Congrats/congrats.svg';

import './styles.scss';

const Congrats = () => {
    return (
        <Container className="congrats-container">
            <Card className="congrats-card">
                <CardMedia
                    className="congrats-image"
                    component="img"
                    image={CongratsImage} // Aquí debes proporcionar la URL de la imagen
                    alt="Congratulations"
                />
                <CardContent className="congrats-content">
                    <Typography variant="h1" className="congrats-title">
                        Congratulations!
                    </Typography>
                    <Typography variant="body1" className="congrats-description">
                        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export { Congrats };
