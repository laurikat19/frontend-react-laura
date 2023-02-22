import { Typography } from '@mui/material';

export const AsignaturasCount = ({asignaturas}) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Typography component="p" variant="h1" color="primary">
                {asignaturas.length}
            </Typography>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
                Asignaturas
            </Typography>
        </div>
    );
}
