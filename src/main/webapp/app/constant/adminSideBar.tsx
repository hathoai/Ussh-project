import LineAxisIcon from '@mui/icons-material/LineAxis';
import GroupIcon from '@mui/icons-material/Group';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArticleIcon from '@mui/icons-material/Article';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import PaidIcon from '@mui/icons-material/Paid';
import PaymentIcon from '@mui/icons-material/Payment';
import ChecklistIcon from '@mui/icons-material/Checklist';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FolderIcon from '@mui/icons-material/Folder';
import {AUTHORITIES} from "app/config/constants";
import React from "react";

// import React from 'react';
//
// import {
//   ADMIN_DASHBOARD_MANAGEMENT_PATH,
//   ADMIN_FEE_MANAGEMENT_LINK,
//   ADMIN_ROLE_MANAGEMENT_LINK,
//   ADMIN_USER_MANAGEMENT_LINK,
// } from 'app/shared/util/route.path.constants';
// import { AUTHORITIES } from 'app/config/constants';

export const ADMIN_SIDE_BAR = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <LineAxisIcon />,
    text: ['home'],
    header: 'Home Management',
    root: {
      link: "/admin/dashboard",
      role: [AUTHORITIES.ADMIN],
    },
    children: [
      // {
      //   id: '1.1',
      //   subTitle: 'Home',
      //   link: ADMIN_DASHBOARD_MANAGEMENT_PATH,
      //   name: 'Home',
      //   header: 'Home Management',
      //   // role: [AUTHORITIES.READ_USER],
      // },
    ],
    role: [],
  },
  {
    id: 2,
    title: 'Profile Management',
    icon: <GroupIcon />,
    text: ['user', 'role'],

    role: [AUTHORITIES.ADMIN],
    children: [
      {
        id: '2.1',
        subTitle: 'Users',
        link: "/admin/users",
        name: 'User Management',
        header: 'User Management',
        role: [AUTHORITIES.ADMIN],
      },
      // {
      //   id: '2.2',
      //   subTitle: 'Roles',
      //   link: "/admin/users",
      //   name: 'Roles',
      //   header: 'Roles',
      //   role: [AUTHORITIES.ADMIN],
      // },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Allocation',
  //   icon: <PushPinIcon />,
  //   text: ['venue', 'room'],
  //   role: [AUTHORITIES.READ_ALLOCATION],
  //   children: [
  //     {
  //       id: '3.1',
  //       subTitle: 'Venues',
  //       link: 'venue-management',
  //       name: 'Allocation',
  //       header: 'Venue Allocation',
  //       role: [AUTHORITIES.READ_ALLOCATION],
  //     },
  //     {
  //       id: '3.2',
  //       subTitle: 'Rooms',
  //       link: 'room-management/0',
  //       name: 'Allocation',
  //       header: 'Room Allocation',
  //       role: [AUTHORITIES.READ_ALLOCATION],
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'Fees',
  //   icon: <PaidIcon />,
  //   text: ['Fee'],
  //   role: [AUTHORITIES.READ_FEE],
  //   name: 'Fee Management',
  //   root: {
  //     link: ADMIN_FEE_MANAGEMENT_LINK,
  //     role: [AUTHORITIES.READ_FEE],
  //   },
  //   children: [
  //     // {
  //     //   id: '4.1',
  //     //   subTitle: 'Fees',
  //     //   link: ADMIN_FEE_MANAGEMENT_LINK,
  //     //   name: 'Fee Management',
  //     //   header: 'Fee Management',
  //     //   role: [AUTHORITIES.READ_FEE],
  //     // },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: 'Tests',
  //   icon: <ArticleIcon />,
  //   text: ['test', 'new test'],
  //   role: [AUTHORITIES.READ_TEST],
  //   name: 'Test Management',
  //   root: {
  //     link: 'test-management',
  //     role: [AUTHORITIES.READ_TEST],
  //   },
  //   children: [
  //     // {
  //     //   id: '5.1',
  //     //   subTitle: 'Test',
  //     //   link: 'test-management',
  //     //   name: 'Test Management',
  //     //   header: 'Test Management',
  //     //   role: [AUTHORITIES.READ_TEST],
  //     // },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Candidates',
  //   icon: <ChecklistIcon />,
  //   text: ['Candidate'],
  //   role: [AUTHORITIES.READ_CANDIDATE],
  //   name: 'Candidate Management',
  //   root: {
  //     link: 'candidate-management',
  //     role: [AUTHORITIES.READ_CANDIDATE],
  //   },
  //   children: [
  //     // {
  //     //   id: '6.1',
  //     //   subTitle: 'Candidates',
  //     //   link: 'candidate-management',
  //     //   name: 'Candidate Management',
  //     //   header: 'Candidate Management',
  //     //   role: [AUTHORITIES.READ_CANDIDATE],
  //     // },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Certificates',
  //   icon: <CheckCircleOutlineIcon />,
  //   text: ['Certificates Management'],
  //   name: 'Certificate Management',
  //   role: [AUTHORITIES.READ_CERTIFICATE],
  //   root: {
  //     link: 'certificates-management',
  //     role: [],
  //   },
  //   children: [
  //     // {
  //     //   id: '8.1',
  //     //   subTitle: 'Certificates',
  //     //   link: 'certificates-management',
  //     //   name: 'Certificates Management',
  //     //   header: 'Certificates Management',
  //     //   role: [],
  //     // },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Payment History',
  //   icon: <PaymentIcon />,
  //   text: ['Payment'],
  //   role: [AUTHORITIES.READ_PAYMENT],
  //   name: 'Payment Management',
  //   root: {
  //     link: 'payment-history?search=&size=10',
  //     role: [AUTHORITIES.READ_PAYMENT],
  //   },
  //   children: [
  //     // {
  //     //   id: '8.1',
  //     //   subTitle: 'Payment History',
  //     //   link: 'payment-history',
  //     //   name: 'Payment Management',
  //     //   header: 'Payment History',
  //     //   role: [AUTHORITIES.READ_PAYMENT],
  //     // },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Announcement ',
  //   icon: <CampaignIcon />,
  //   text: ['Announcement'],
  //   role: [AUTHORITIES.READ_ANNOUNCEMENT],
  //   name: 'Announcement Management',
  //   root: {
  //     link: 'announcement-list',
  //     role: [AUTHORITIES.READ_ANNOUNCEMENT],
  //   },
  //   children: [
  //     // {
  //     //   id: '9.1',
  //     //   subTitle: 'Announcement ',
  //     //   link: 'announcement-list',
  //     //   name: 'Announcement Management',
  //     //   header: 'Announcement Management',
  //     //   role: [AUTHORITIES.READ_ANNOUNCEMENT],
  //     // },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'File Management',
  //   icon: <AttachFileIcon />,
  //   text: ['File Management'],
  //   name: 'Documents',
  //   role: [AUTHORITIES.READ_FILE],
  //   root: {
  //     link: 'document-management',
  //     role: [],
  //   },
  //   children: [
  //     // {
  //     //   id: '10.1',
  //     //   subTitle: 'Documents',
  //     //   link: 'document-management',
  //     //   name: 'Documents',
  //     //   header: 'Documents',
  //     //   role: [],
  //     // },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Support & FAQs ',
  //   icon: <ChatIcon />,
  //   text: ['support', 'faqs'],
  //   role: [AUTHORITIES.READ_FAQ],
  //   children: [
  //     {
  //       id: '11.1',
  //       subTitle: 'Support Center',
  //       link: 'support-management',
  //       name: 'Support & FAQs',
  //       header: 'Support Center',
  //       role: [AUTHORITIES.READ_QA],
  //     },
  //     {
  //       id: '11.2',
  //       subTitle: 'FAQs',
  //       link: 'faqs-management',
  //       name: 'Support & FAQs',
  //       header: 'FAQ Management',
  //       role: [AUTHORITIES.READ_FAQ],
  //     },
  //   ],
  // },
];
