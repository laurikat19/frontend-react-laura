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
import { useAsignaturas } from '../hooks/asignaturas';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import AsignaturaForm from './AsignaturasForm';
import { useState } from 'react';

export const AsignaturasList = ({asignaturas, handleUpdateAsignatura, handleDeleteAsignatura}) => {
    const [open, setOpen] = useState(false);
    const [asignatura, setAsignatura] = useState({});

    const handleClickOpen = (asignatura) => {
        setAsignatura(asignatura)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid container spacing={2}>
                {asignaturas.map((asignatura) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={asignatura.id}>
                        <Card>
                            <Grid container>
                                <Grid item xs={12}>
                                    <CardHeader title={asignatura.nombre} subheader={asignatura.codigo} />
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Fecha de creación: <br /> {moment(asignatura.create_at).format('DD/MM/YYYY HH:mm:ss')}
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12}>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    Fecha de actualización: <br /> {moment(asignatura.update_at).format('DD/MM/YYYY HH:mm:ss')}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button size="large" color="primary" fullWidth onClick={() => { handleClickOpen(asignatura) }}>
                                        <EditIcon />
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button size="large" color="error" fullWidth onClick={() => { handleDeleteAsignatura(asignatura.id) }}>
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
                        Este formulario para actualizar datos de asignaturas es una interfaz de usuario que permite a los usuarios modificar y actualizar la información de un asignatura existente. Este formulario incluiría campos para editar datos como el nombre de la asignatura y el codigo de asignatura.
                    </DialogContentText> <br />
                    <AsignaturaForm onSubmit={handleUpdateAsignatura} isEditing={true} initialValues={{
                        id: asignatura.id,
                        nombre: asignatura.nombre,
                        codigo: asignatura.codigo,
                    }} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
