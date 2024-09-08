import type {NavigationTree} from '@/@types/navigation';
import {IconDashboard, IconUser} from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: '',
    icon: IconDashboard,
    authority: [],
    subMenu: []
  },
  {
    key: 'rekhta-download',
    path: '/rekhta-download',
    title: 'Rekhta Download',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: []
  },
  {
    key: 'chughtai-download',
    path: '/chughtai-download',
    title: 'Chughtai Library Download',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: []
  },
];

export default navigationConfig;
