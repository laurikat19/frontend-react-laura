import { Typography } from '@mui/material';

export const ClasesCount = ({clases}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Typography component="p" variant="h1" color="primary">
                {clases.length}
            </Typography>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
                Clases
            </Typography>
        </div>
    );
}
