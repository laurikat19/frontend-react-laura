import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

export const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/laurikat19">
                Laura Dev
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}