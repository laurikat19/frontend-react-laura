import { useState } from 'react';
import {
    Box,
    Container,
    CssBaseline,
    Divider,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Toolbar,
    Typography
} from '@mui/material';
import { Copyright } from '../components/Copyright';
import { AppBar } from '../components/AppBar';
import { Drawer } from '../components/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { options } from '../helpers/variables';
import { ProfesoresList } from '../../profesores/components/ProfesoresList';
import ProfesorForm from '../../profesores/components/ProfesorForm';
import { ProfesoresCount } from '../../profesores/components/ProfesoresCount';
import { AsignaturasCount } from '../../asignaturas/components/AsignaturasCount';
import { AsignaturasList } from '../../asignaturas/components/AsignaturasList';
import AsignaturaForm from '../../asignaturas/components/AsignaturasForm';
import { useAsignaturas } from '../../asignaturas/hooks/asignaturas';
import { useProfesores } from '../../profesores/hooks/profesores';

const DashboardContent = () => {
    const [open, setOpen] = useState(true);
    const [option, setOption] = useState('Profesores');

    const { asignaturas, handleCreateAsignatura, handleUpdateAsignatura, handleDeleteAsignatura } = useAsignaturas();
    const { profesores, handleCreateProfesor, handleUpdateProfesor, handleDeleteProfesor } = useProfesores();


    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px',
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Frontend {option}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {
                        options.map((op) => <>
                            <ListItemButton
                                onClick={() => setOption(op.title)}
                                selected={op.title === option}
                            >
                                <ListItemIcon>
                                    {op.icon}
                                </ListItemIcon>
                                <ListItemText primary={op.title} />
                            </ListItemButton>
                            <Divider sx={{ my: 1 }} />
                        </>)
                    }
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={8} lg={9}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                {
                                    option === 'Profesores' ?
                                        <ProfesorForm onSubmit={handleCreateProfesor} isEditing={false} initialValues={null} />
                                        :
                                        option === 'Asignaturas' ?
                                            <AsignaturaForm onSubmit={handleCreateAsignatura} isEditing={false} initialValues={null} />
                                            :
                                            <ProfesorForm isEditing={false} initialValues={null} />

                                }
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                                {
                                    option === 'Profesores' ?
                                        <ProfesoresCount profesores={profesores} />
                                        :
                                        option === 'Asignaturas' ?
                                            <AsignaturasCount asignaturas={asignaturas} />
                                            :
                                            <ProfesoresCount />
                                }
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                {
                                    option === 'Profesores' ?
                                        <ProfesoresList
                                            profesores={profesores}
                                            handleUpdateProfesor={handleUpdateProfesor}
                                            handleDeleteProfesor={handleDeleteProfesor}
                                        />
                                        :
                                        option === 'Asignaturas' ?
                                            <AsignaturasList
                                                asignaturas={asignaturas}
                                                handleUpdateAsignatura={handleUpdateAsignatura}
                                                handleDeleteAsignatura={handleDeleteAsignatura}
                                            />
                                            :
                                            <ProfesoresList />
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}