import {Suspense, lazy} from 'react';
import {Navigate} from 'react-router-dom';
import {RouteObject} from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import { Grid } from "@mui/material";

const Loader = (Component) => (props) =>
    (
        <Suspense fallback={<SuspenseLoader/>}>

                    <Component {...props} />


        </Suspense>
    );

// Pages

//const Overview = Loader(lazy(() => import('src/content/overview')));

// Master Item
const LoginPage = Loader(lazy(() => import('src/content/login')));

const MasterItemAdd = Loader(lazy(() => import('src/content/masteritem/masteritemadd')));
const MasterItemHome = Loader(lazy(() => import('src/content/masteritem/masteritemhome')));

const MasterItemColorAdd = Loader(lazy(() => import('src/content/masteritemcolor/masteritemcoloradd')));
const MasterItemColorHome = Loader(lazy(() => import('src/content/masteritemcolor/masteritemcolorhome')));

const MasterItemGroupAdd = Loader(lazy(() => import('src/content/masteritemgroup/masteritemgroupadd')));
const MasterItemGroupHome = Loader(lazy(() => import('src/content/masteritemgroup/masteritemgrouphome')));

const MasterItemVendorAdd = Loader(lazy(() => import('src/content/masteritemvendor/masteritemvendoradd')));
const MasterItemVendorHome = Loader(lazy(() => import('src/content/masteritemvendor/masteritemvendorhome')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

// Applications

const Messenger = Loader(
    lazy(() => import('src/content/applications/Messenger'))
);
const Transactions = Loader(
    lazy(() => import('src/content/applications/Transactions'))
);
const UserProfile = Loader(
    lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
    lazy(() => import('src/content/applications/Users/settings'))
);



const Status404 = Loader(
    lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
    lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
    lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
    lazy(() => import('src/content/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
    {
        path: '',
        element: <BaseLayout/>,
        children: [
            {
                path: '/',
                element: <LoginPage/>
            },
            {
                path: 'login',
                element: <LoginPage to="/" replace/>
            },
            {
                path: 'status',
                children: [
                    {
                        path: '',
                        element: <Navigate to="404" replace/>
                    },
                    {
                        path: '404',
                        element: <Status404/>
                    },
                    {
                        path: '500',
                        element: <Status500/>
                    },
                    {
                        path: 'maintenance',
                        element: <StatusMaintenance/>
                    },
                    {
                        path: 'coming-soon',
                        element: <StatusComingSoon/>
                    }
                ]
            },
            {
                path: '*',
                element: <Status404/>
            }
        ]
    },
    {
        path: 'dashboards',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <Navigate to="crypto" replace/>
            },
            {
                path: 'crypto',
                element: <Crypto/>
            },
            {
                path: 'messenger',
                element: <Messenger/>
            }
        ]
    },
    {
        path: 'management',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <Navigate to="transactions" replace/>
            },
            {
                path: 'transactions',
                element: <Transactions/>
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        element: <Navigate to="details" replace/>
                    },
                    {
                        path: 'details',
                        element: <UserProfile/>
                    },
                    {
                        path: 'settings',
                        element: <UserSettings/>
                    }
                ]
            }
        ]
    },

    {
        path: 'masteritem',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <Navigate to="masteritem" replace/>
            },
            {
                path: 'masteritemadd',
                element: <MasterItemAdd/>
            },
            {
                path: 'masteritemhome',
                element: <MasterItemHome/>
            }
        ]
    },
    {
        path: 'masteritemcolor',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <Navigate to="masteritemcolor" replace/>
            },
            {
                path: 'masteritemcoloradd',
                element: <MasterItemColorAdd/>
            },
            {
                path: 'masteritemcolorhome',
                element: <MasterItemColorHome/>
            }
        ]
    },
    {
        path: 'masteritemgroup',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <Navigate to="masteritemgroup" replace/>
            },
            {
                path: 'masteritemgroupadd',
                element: <MasterItemGroupAdd/>
            },
            {
                path: 'masteritemgrouphome',
                element: <MasterItemGroupHome/>
            }
        ]
    },
    {
        path: 'masteritemvendor',
        element: <SidebarLayout/>,
        children: [
            {
                path: '',
                element: <Navigate to="masteritemvendor" replace/>
            },
            {
                path: 'masteritemvendoradd',
                element: <MasterItemVendorAdd/>
            },
            {
                path: 'masteritemvendorhome',
                element: <MasterItemVendorHome/>
            }
        ]
    },
];

export default routes;
