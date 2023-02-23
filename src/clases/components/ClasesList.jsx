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
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import ClaseForm from './ClasesForm';
import { useState } from 'react';

export const ClasesList = ({ clases, profesores, asignaturas, handleUpdateClase, handleDeleteClase }) => {
    const [open, setOpen] = useState(false);
    const [clase, setClase] = useState({});

    const handleClickOpen = (clase) => {
        setClase(clase)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container spacing={2}>
                {clases.map((clase) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={clase.id}>
                        <Card>
                            <Grid container>
                                <Grid item xs={12}>
                                    <CardHeader title={clase.asignatura} subheader={clase.profesor} />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Horario: <br /> {clase.horario}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Salon: <br /> {clase.salon}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Fecha de creación: <br /> {moment(clase.create_at).format('DD/MM/YYYY HH:mm:ss')}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Fecha de actualización: <br /> {moment(clase.update_at).format('DD/MM/YYYY HH:mm:ss')}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button size="large" color="primary" fullWidth onClick={() => { handleClickOpen(clase) }}>
                                        <EditIcon />
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button size="large" color="error" fullWidth onClick={() => { handleDeleteClase(clase.id) }}>
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
                        Este formulario para actualizar datos de clases es una interfaz de usuario que permite a los usuarios modificar y actualizar la información de un clase existente. Este formulario incluiría campos para editar datos como el nombre de la clase y el codigo de clase.
                    </DialogContentText> <br />
                    <ClaseForm
                        onSubmit={handleUpdateClase}
                        isEditing={true}
                        asignaturas={asignaturas}
                        profesores={profesores}
                        initialValues={{
                            id: clase.id,
                            horario: clase.horario,
                            salon: clase.salon,
                            profesor: clase.profesor_id,
                            asignatura: clase.asignatura_id,
                        }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
