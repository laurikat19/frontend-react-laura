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
import { useClases } from '../hooks/clases';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import AsignaturaForm from './ClasesForm';
import { useState } from 'react';

export const ClasesList = ({clases, handleUpdateClases, handleDeleteClases}) => {
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
                {asignaturas.map((clase) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={clase.id}>
                        <Card>
                            <Grid container>
                                <Grid item xs={12}>
                                    <CardHeader title={clase.nombre} subheader={clase.codigo} />
                                    <CardContent>
                                        <Grid container spacing={2}>
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
                                    <Button size="large" color="error" fullWidth onClick={() => { handleDeleteClases(clase.id) }}>
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
                        Este formulario para actualizar datos de las clases es una interfaz de usuario que permite a los usuarios modificar y actualizar la información de un asignatura existente. Este formulario incluiría campos para editar datos como el nombre de la asignatura y el codigo de asignatura.
                    </DialogContentText> <br />
                    <AsignaturaForm onSubmit={handleUpdateClases} isEditing={true} initialValues={{
                        id: clase.id,
                        nombre: clase.nombre,
                        codigo: clase.codigo,
                    }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
