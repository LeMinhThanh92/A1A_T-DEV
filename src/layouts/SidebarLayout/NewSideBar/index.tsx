import * as React from 'react';
import {useEffect, useState} from 'react';
import {Link, NavLink as RouterLink} from 'react-router-dom';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import HomeDrawer from '@mui/material/Drawer';
import DrawerAppBar, {AppBarProps as DrawerAppBarProps} from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import {
    Button,
    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Popover,
    Toolbar,
    Typography
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {AccountBox as AccountBoxIcon, Home as HomeIcon, LogoutOutlined,} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu"
import TableChartTwoToneIcon from "@mui/icons-material/TableChartTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";


const NavigationDrawer = (props: any) => {
    const theme = useTheme()
    // const router = useRouter();
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const menuItems = [
        {
            text: 'Master Item',
            icon: <HomeIcon/>,
            onClick: () => {},
           to:'../../masteritem'
        },
        {
            text: 'Group',
            icon: <AccountBoxIcon/>,
            onClick: () => {},
            to:'../masteritemgroup/masteritemgrouphome'
        },
        {
            text: 'Color',
            icon: <LogoutOutlined/>,
            onClick: () => {},
            to:'../masteritemcolor/masteritemcolorhome'
        },
        {
            text: 'Log out',
            icon: <LogoutOutlined/>,
            onClick: () => {},
            to:'../login'
        }
    ];

    return (<Box sx={{display: "flex"}}>
        <CssBaseline/>
        <AppBar position={"fixed"} open={open} sx={{backgroundColor:'#E0EEE0'}}>
            <Toolbar>
                <IconButton
                    color={"inherit"}
                    aria-label={"open drawer"}
                    edge={"start"}
                    sx={{
                        ml:2,
                        color:'black',
                        marginRight: 5,
                        ...(open && {display: "none"})
                    }}
                    onClick={handleDrawerOpen}>
                    <MenuIcon sx={{color:'back'}}/>
                </IconButton>
                <Typography variant={"h6"} sx={{color:'black'}}>
                    Data
                </Typography>

            </Toolbar>
        </AppBar>
        <Drawer variant={"permanent"} open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{display: "block"}}>
                        <Link to={item.to} style={{textDecoration:'none',color:'inherit'}}><ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5
                            }}

                            onClick={item.onClick}>
                            <ListItemIcon sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto"
                            }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} sx={{fontSize:'bold',opacity: open ? 1 : 0}}/>
                        </ListItemButton></Link>

                    </ListItem>
                ))}
            </List>
        </Drawer>
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
            <DrawerHeader/>
            {props.children}
        </Box>
    </Box>)
}

const drawerWidth = 240

const openedDrawer = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflow: "hidden",
})

const closeDrawer = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
})

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends DrawerAppBarProps {
    open?: boolean
}

const AppBar = styled(DrawerAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Drawer = styled(HomeDrawer, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box', ...(open && {
        ...openedDrawer(theme),
        '& .MuiDrawer-paper': openedDrawer(theme),
    }), ...(!open && {...closeDrawer(theme), '& .MuiDrawer-paper': closeDrawer(theme),}),
}))

export default NavigationDrawer