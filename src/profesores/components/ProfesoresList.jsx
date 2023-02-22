import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from '@mui/material';
import { useProfesores } from '../hooks/profesores';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';

export const ProfesoresList = () => {
    const { profesores, handleDeleteProfesor } = useProfesores();

    const eliminar = (id) => {
        handleDeleteProfesor(id)
    }

    return (
        <Grid container spacing={2}>
            {profesores.map((profesor) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={profesor.id}>
                    <Card>
                        <Grid container>
                            <Grid item xs={12}>
                                <CardHeader title={profesor.nombre} subheader={profesor.correo} />
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" component="p">
                                                Teléfono: {profesor.telefono}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Fecha de creación: <br /> {moment(profesor.create_at).format('DD/MM/YYYY HH:mm:ss')}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Fecha de actualización: <br /> {moment(profesor.update_at).format('DD/MM/YYYY HH:mm:ss')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                            <Grid item xs={6}>
                                <Button size="large" color="primary" fullWidth>
                                    <EditIcon />
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button size="large" color="error" fullWidth onClick={() => { eliminar(profesor.id) }}>
                                    <DeleteForeverIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid >

    );
}
