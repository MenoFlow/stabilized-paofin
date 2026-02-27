// src/mockData/users.js
export const mockUsers = [
  {
    id: 1,
    username: 'directeur.general',
    email: 'directeur.general@paofin.mg',
    password: 'admin123',
    role: 'dg',
    roleName: {
      fr: 'Direction Générale',
      mg: 'Fitantanana Ankapobeny'
    },
    dashboard: '/dashboard-dg',
    permissions: ['all']
  },
  {
    id: 2,
    username: 'directeur.operations',
    email: 'directeur.operations@paofin.mg',
    password: 'ops123',
    role: 'operations',
    roleName: {
      fr: 'Directeur Opérations',
      mg: 'Talen\'ny Asa'
    },
    dashboard: '/dashboard-operations',
    permissions: ['operations', 'credits']
  },
  {
    id: 3,
    username: 'directeur.marketing',
    email: 'directeur.marketing@paofin.mg',
    password: 'mkt123',
    role: 'marketing',
    roleName: {
      fr: 'Marketing & Commercial',
      mg: 'Marketing sy Varotra'
    },
    dashboard: '/dashboard-marketing',
    permissions: ['marketing', 'analytics']
  },
  {
    id: 4,
    username: 'agent.commercial',
    email: 'agent.commercial@paofin.mg',
    password: 'com123',
    role: 'commercial',
    roleName: {
      fr: 'Agent Commercial',
      mg: 'Mpivarotra'
    },
    dashboard: '/dashboard-commercial',
    permissions: ['commercial', 'leads']
  },
  {
    id: 5,
    username: 'client.test',
    email: 'client@test.mg',
    password: 'client123',
    role: 'client',
    roleName: {
      fr: 'Client',
      mg: 'Mpanjifa'
    },
    dashboard: '/espace-client',
    permissions: ['client']
  }
];

// Supprimez ou commentez demoAccounts
// export const demoAccounts = [ ... ];