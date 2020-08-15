import AdminHomePage from '../containers/AdminHomePage/index';
import Taskboard from '../containers/Taskboard';
import LoginPage from '../containers/LoginPage';
import SignPage from '../containers/SignupPage';


export const API_ENDPOINT = 'http://localhost:3000';





export const STATUSES = [
     {
          value: 0 ,
          label: 'READY'
     },
     {
          value: 1 ,
          label: 'IN PROGRESS'
     },
     {
          value: 2 ,
          label: 'COMPLETED'
     },
]

export const STATUS_CODE = {
     SUCCESS: 200,
     CREATED: 201,
     UPDATED: 202,
};


export const ADMIN_ROUTES = [
     {
       name: 'Trang quản trị',
       path: '/admin',
       exact: true,
       component: AdminHomePage,
     },
     {
       name: 'Quản lý công việc',
       path: '/admin/task-board',
       component: Taskboard,
     },
   ];

export const ROUTES = [
     {
          name: 'Dang nhap',
          path: '/login',
          component: LoginPage
     },
     {
          name: 'Dang ky',
          path: '/signup',
          component: SignPage
     }
];