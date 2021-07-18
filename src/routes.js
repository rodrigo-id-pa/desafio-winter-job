import Dashboard from 'views/Dashboard.js';
import Icons from 'views/Icons.js';

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-pie-35',
    component: Dashboard,
    layout: '/admin',
  },

  {
    path: '/icons',
    name: 'Icons',
    icon: 'nc-icon nc-atom',
    component: Icons,
    layout: '/admin',
  },
];

export default dashboardRoutes;
