import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Typography
} from '@mui/material';
import { useProfesores } from '../hooks/profesores';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import ProfesorForm from './ProfesorForm';
import { useState } from 'react';

export const ProfesoresList = ({profesores, handleUpdateProfesor, handleDeleteProfesor}) => {
    const [open, setOpen] = useState(false);
    const [profesor, setProfesor] = useState({});

    const handleClickOpen = (profesor) => {
        setProfesor(profesor)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const eliminar = (id) => {
        handleDeleteProfesor(id)
    }

    return (
        <>
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
                                    <Button size="large" color="primary" fullWidth onClick={() => { handleClickOpen(profesor) }}>
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
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Editar</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Este formulario para actualizar datos de profesores es una interfaz de usuario que permite a los usuarios modificar y actualizar la información de un profesor existente. Este formulario incluiría campos para editar datos como el nombre, correo electrónico, teléfono, dirección.
                    </DialogContentText> <br />
                    <ProfesorForm onSubmit={handleUpdateProfesor} isEditing={true} initialValues={{
                        id: profesor.id,
                        nombre: profesor.nombre,
                        correo: profesor.correo,
                        telefono: profesor.telefono,
                    }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
