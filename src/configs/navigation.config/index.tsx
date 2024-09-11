import type {NavigationTree} from '@/@types/navigation';
import {IconDashboard, IconUser, IconDownload} from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/',
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
    icon: IconDownload,
    authority: [],
    subMenu: []
  },
  {
    key: 'chughtai-download',
    path: '/chughtai-download',
    title: 'Chughtai Library Download',
    translateKey: '',
    icon: IconDownload,
    authority: [],
    subMenu: []
  },
];

export default navigationConfig;
