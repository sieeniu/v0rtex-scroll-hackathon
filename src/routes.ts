export const routes = {
  home: '/',
  companies: '/companies',
  company: (id: string) => `/companies/${id}`,
  createCompany: '/companies/create',
};
