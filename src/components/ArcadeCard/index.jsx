import { Typography, Card, CardContent } from '@mui/material';
import { ShoppingCartOutlined as ShoppingCartOutlinedIcon } from '@mui/icons-material';

const ArcadeCard = (props) => {

    const { icon, title, price, discount } = props;

    return (
        <Card className="plan-card">
            <CardContent className="card-content">
                <img src={icon} alt="" className='icon' />
                <Typography variant="h6" className="card-title">
                    {title}
                </Typography>
                <Typography variant="body2" className="card-price">
                    {price}
                </Typography>
                <Typography variant="body2" className="card-discount">
                    {discount}
                </Typography>
            </CardContent>
        </Card>
    );
};

export { ArcadeCard };