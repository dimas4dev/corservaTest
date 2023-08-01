import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';

import './styles.scss';

const Resume = (props) => {


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
                            <TableCell>Online service</TableCell>
                            <TableCell id='change' >Change</TableCell>
                        </TableRow>
                        <TableRow className="planResume__right">
                            <TableCell align="right">$9/mo </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Online service</TableCell>
                            <TableCell align="right">+ $1/mo</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Larger storage</TableCell>
                            <TableCell align="right">+ $2/mo</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="footer">
                <Typography variant="body1" className="footer__left">
                    Total (per month)
                </Typography>
                <Typography variant="body1" className="footer__right">
                    + $12/mo
                </Typography>
            </div>
        </div>
    );
};

export { Resume };
