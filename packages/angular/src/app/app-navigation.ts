
import { faHouse,
   faClockRotateLeft,
   faFileLines,
   faBuilding,
   faUserGroup,
   faStar,
   faFileChartColumn,
   faBell,
   faFileContract,
   faUserPlus,
   faCalendarClock,
   faCalendarCheck,
} from '@fortawesome/pro-regular-svg-icons';
import { faSquare, } from '@fortawesome/pro-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

export const navigation = [
  {
    label: '',
    items: [
      {
        text: 'Startseite',
        path: '/dashboard',
        icon: icon(faHouse).html[0],
        badge: undefined,
      },
      {
        text: 'Aufgaben',
        path: '',
        icon: icon(faBell).html[0],
        badge: undefined,
      },
      {
        text: 'Favoriten',
        path: '',
        icon: icon(faStar).html[0],
        badge: undefined,
      },
      {
        text: 'Zuletzt verwendet',
        path: '',
        icon: icon(faClockRotateLeft).html[0],
        badge: undefined,
      },
      {
        text: 'Berichte',
        path: '/analytics-dashboard',
        icon: icon(faFileChartColumn).html[0],
        badge: undefined,
      },
      
    ]
  },
  {
    label: 'Verträge',
    items: [
      {
        text: 'Alle Verträge',
        path: '/crm-contact-list',
        icon: icon(faFileContract).html[0],
        badge: undefined,
      },
      {
        text: 'Von mir erstellt',
        path: '/crm-contact-details',
        icon: icon(faUserPlus).html[0],
        badge: undefined,
      },
      {
        text: 'Auslaufende Verträge',
        path: '',
        icon: icon(faCalendarClock).html[0],
        badge: undefined,
      },
      {
        text: 'Anstehende Verlängerungen',
        path: '',
        icon: icon(faCalendarCheck).html[0],
        badge: undefined,
      },
    ],
  },
  {
    label: 'Vertragsarten',
    items: [
      {
        text: 'Alle Vertragsarten',
        path: '/planning-task-list',
        icon: icon(faFileLines).html[0],
        badge: undefined,
      },
      {
        text: 'Dienstleistungsvertrag',
        path: '/planning-task-details',
        icon: icon(faFileLines).html[0],
        badge: undefined,
      },
      {
        text: 'Finanzvertrag',
        path: '/reporting-viewer',
        icon: icon(faFileLines).html[0],
        badge: undefined,
      },
      {
        text: 'Mietvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
        badge: undefined,
      },
    ],
  },
  {
    label: 'Status',
    items: [
      {
        text: 'Entwurf',
        path: '',
        icon: icon(faSquare, { styles: { color: '#03a9f4' }}).html[0],
        badge: 2,
      },
      {
        text: 'Prüfung',
        path: '',
        icon: icon(faSquare, { styles: { color: '#f1eb05' }}).html[0],
        badge: 7,
      },
      {
        text: 'Unterzeichnung',
        path: '',
        icon: icon(faSquare, { styles: { color: '#ffc107' }}).html[0],
        badge: 4,
      },
      {
        text: 'Aktiv',
        path: '',
        icon: icon(faSquare, { styles: { color: '#2eb52c' }}).html[0],
        badge: 32,
      },
      {
        text: 'Inaktiv',
        path: '',
        icon: icon(faSquare, { styles: { color: '#b4b4b4' }}).html[0],
        badge: 12,
      },
      {
        text: 'Archiviert',
        path: '',
        icon: icon(faSquare, { styles: { color: '#b4b4b4' }}).html[0],
        badge: 11,
      },
    ],
  },
  {
    label: 'Partner',
    items: [
      {
        text: 'Firmen',
        path: '',
        icon: icon(faBuilding).html[0],
        badge: undefined,
      },
      {
        text: 'Kontakte',
        path: '',
        icon: icon(faUserGroup).html[0],
        badge: undefined,
      },
    ],
  },
  /*{
    text: 'Analytics',
    path: '',
    items: [
      {
        text: 'Dashboard',
        path: '/analytics-dashboard',
        icon: 'chart',
        badge: undefined,
      },
      {
        text: 'Sales Report',
        path: '/analytics-sales-report',
        icon: 'money',
        badge: undefined,
      },
      {
        text: 'Geography',
        path: '/analytics-geography',
        icon: 'globe',
        badge: undefined,
      },
    ],
  },*/
];
