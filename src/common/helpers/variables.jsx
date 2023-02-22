import WcIcon from '@mui/icons-material/Wc';
import ClassIcon from '@mui/icons-material/Class';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const drawerWidth = 240;

export const apiUrl = 'http://127.0.0.1:8000';

export const options = [
    {
        title: 'Profesores',
        icon: <WcIcon />,
    },
    {
        title: 'Clases',
        icon: <ClassIcon />,
    },
    {
        title: 'Asignaturas',
        icon: <ImportContactsIcon />,
    },
]