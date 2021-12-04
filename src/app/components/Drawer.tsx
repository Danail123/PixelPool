import { Drawer, List, ListItem, ListItemText, IconButton,} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import LoginIcon from '@mui/icons-material/Login';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
        },
        icon: {
            color: "white",
        },
        about: {
            backgroundColor: "lightblue",
        },
        draw: {
            zIndex: -1190,
        },
    })
);

export const DrawerComponent: React.FunctionComponent = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const classes = useStyles();

    const CloseDrawer = () => {
        setOpenDrawer(false)
    }

    return (
        <Fragment >
            <Drawer
                open={openDrawer}
                onClose={CloseDrawer}
                // className={classes.draw}
                // style={{
                //     zIndex:1101,
                // }}
                anchor="right"
            >
                <List>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <HomeIcon/>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer} className={classes.about}>
                        <ListItemText>
                            <FeedIcon/>
                            <Link className={classes.link} to="/about" >About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <LoginIcon/>
                            <Link className={classes.link} to="/login">Login</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <ContactMailIcon/>
                            <Link className={classes.link} to="/contactsUs">Contact us</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <ConfirmationNumberIcon/>
                            <Link className={classes.link} to="/tickets">Tickets</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </Fragment>
    );
}