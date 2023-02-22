import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from '@mui/material';
import { useProfesores } from '../hooks/profesores';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

export const ProfesoresList = () => {
    const { profesores } = useProfesores();

    return (
        <Grid container spacing={2}>
            {profesores.map((profesor) => (
                <>
                    <Grid item xs={12} sm={6} md={4} lg={3} key={profesor.id}>
                        <Card>
                            <CardHeader title={profesor.nombre} subheader={profesor.correo} />
                            <CardContent>
                                <Typography variant="body1" component="p">
                                    Teléfono: {profesor.telefono}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Fecha de creación: {profesor.create_at}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Fecha de actualización: {profesor.update_at}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Griditem xs={12}><DeleteForeverIcon></DeleteForeverIcon></Griditem>
                    <Griditem xs={12}></Griditem>
                </>
            ))}
        </Grid>

    );
}
