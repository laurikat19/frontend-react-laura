import { Typography } from '@mui/material';
import { useProfesores } from '../hooks/profesores';

export const ProfesoresCount = () => {
    const { profesores } = useProfesores();

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <Typography component="p" variant="h1" color="primary">
                {profesores.length}
            </Typography>
            <Typography component="h2" variant="h5" color="primary" gutterBottom>
                Profesores
            </Typography>
        </div>
    );
}
