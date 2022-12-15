
import { faHouse,
   faClockRotateLeft,
   faFileLines,
   faBuilding,
   faUserGroup,
   faStar,
   faFileChartColumn,
   faBell,
} from '@fortawesome/pro-duotone-svg-icons';
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
      },
      {
        text: 'Aufgaben',
        path: '',
        icon: icon(faBell).html[0],
      },
      {
        text: 'Favoriten',
        path: '',
        icon: icon(faStar).html[0],
      },
      {
        text: 'Zuletzt verwendet',
        path: '',
        icon: icon(faClockRotateLeft).html[0],
      },
      {
        text: 'Berichte',
        path: '/analytics-dashboard',
        icon: icon(faFileChartColumn).html[0],
      },
      
    ]
  },
  {
    label: 'Verträge',
    items: [
      {
        text: 'Alle Verträge',
        path: '/crm-contact-list',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Von mir erstellt',
        path: '/crm-contact-details',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Auslaufende Verträge',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Anstehende Verlängerungen',
        path: '',
        icon: icon(faFileLines).html[0],
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
      },
      {
        text: 'Dienstleistungsvertrag',
        path: '/planning-task-details',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Finanzvertrag',
        path: '/reporting-viewer',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Mietvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
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
      },
      {
        text: 'Kontakte',
        path: '',
        icon: icon(faUserGroup).html[0],
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
      },
      {
        text: 'Sales Report',
        path: '/analytics-sales-report',
        icon: 'money',
      },
      {
        text: 'Geography',
        path: '/analytics-geography',
        icon: 'globe',
      },
    ],
  },*/
];
