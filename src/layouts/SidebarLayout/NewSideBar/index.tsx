import * as React from 'react';
import {useEffect, useState} from 'react';
import {Link, NavLink as RouterLink} from 'react-router-dom';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import HomeDrawer from '@mui/material/Drawer';
import DrawerAppBar, {AppBarProps as DrawerAppBarProps} from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import {
    Avatar,
    Button,
    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Menu,
    Popover,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    AccountBox as AccountBoxIcon,
    Home as HomeIcon,
    LogoutOutlined,
    VerifiedUserOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem";

const settings = ['Logout'];


const NavigationDrawer = (props: any) => {
    const theme = useTheme()
    // const router = useRouter();
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")

    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
            onClick: () => {
                setTitle('Master Item')
            },
            to: '../../masteritem'
        },
        {
            text: 'Group',
            icon: <AccountBoxIcon/>,
            onClick: () => {
                setTitle('Group')
            },
            to: '../masteritemgroup/masteritemgrouphome'
        },
        {
            text: 'Color',
            icon: <LogoutOutlined/>,
            onClick: () => {
                setTitle('Color')
            },
            to: '../masteritemcolor/masteritemcolorhome'
        },
        {
            text: 'Vendor',
            icon: <LogoutOutlined/>,
            onClick: () => {
                setTitle('Vendor')
            },
            to: '../masteritemvendor/masteritemvendorhome'
        }
    ];

    return (
        <Box sx={{display: "flex"}}>
            <CssBaseline/>
            <AppBar position={"fixed"} open={open}>
                <Toolbar>
                    <IconButton
                        color={"inherit"}
                        aria-label={"open drawer"}
                        edge={"start"}
                        sx={{
                            ml: 2,
                            color: 'black',
                            marginRight: 5,
                            ...(open && {display: "none"})
                        }}
                        onClick={handleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography sx={{fontSize: '2em', flexGrow: 1, ml: 2}}>
                        {title}
                    </Typography>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatars/1.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <Link key={setting} to='../login' style={{textDecoration: 'none', color: 'inherit'}}>
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem></Link>
                            ))}
                        </Menu>
                    </Box>

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
                            <Link to={item.to} style={{textDecoration: 'none', color: 'inherit'}}><ListItemButton
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
                                <ListItemText primary={item.text} sx={{fontSize: 'bold', opacity: open ? 1 : 0}}/>
                            </ListItemButton></Link>

                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                {props.children}
            </Box>
        </Box>
    )
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