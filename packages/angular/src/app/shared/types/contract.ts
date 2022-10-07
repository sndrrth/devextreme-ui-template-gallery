export interface Contract {
    id: string;
    title: string;
    status: ContractStatus;
    type: string;
    partner: string;
    responsibility: string;
    startDate: string;
    endDate: string;
    lastModification: string;
}

export const contractStatusList = [
    'Aktiv',
    'Abgelehnt',
    'Prüfung',
    'Entwurf',
  ] as const;
  
  export type ContractStatus = (typeof contractStatusList)[number];
  