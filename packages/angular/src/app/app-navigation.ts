
import { faHouse, faClockRotateLeft, faChartPieSimple, faFileLines, faBuilding, faUserGroup, faStar, faPencil } from '@fortawesome/pro-light-svg-icons';
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
        text: 'Zuletzt verwendet',
        path: '',
        icon: icon(faClockRotateLeft).html[0],
      },
      {
        text: 'Favoriten',
        path: '',
        icon: icon(faStar).html[0],
      },
    ]
  },
  {
    label: 'Meine Arbeit',
    items: [
      {
        text: 'Dashboard',
        path: '/analytics-dashboard',
        icon: icon(faChartPieSimple).html[0],
      },
      {
        text: 'Verträge',
        path: '/crm-contact-list',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Vertragsdetails',
        path: '/crm-contact-details',
        icon: icon(faPencil).html[0],
      },
      {
        text: 'Fristen',
        path: '',
        icon: icon(faPencil).html[0],
      },
    ],
  },
  {
    label: 'Verträge',
    items: [
      {
        text: 'Alle Verträge',
        path: '/planning-task-list',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Abonnementsvertrag',
        path: '/planning-task-details',
        icon: icon(faPencil).html[0],
      },
      {
        text: 'Dienstleistungsvertrag',
        path: '/reporting-viewer',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Finanzvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Geheimhaltungsvereinbarung',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'IT Vertrag',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Kaufvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Leasingvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Mietvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Wartungsvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
      },
      {
        text: 'Werkvertrag',
        path: '',
        icon: icon(faFileLines).html[0],
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
