export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'CRM DASHBOARD',
  url: 'http://localhost:3000',
  ogImage: 'http://localhost:3000/og.jpg',
  creator: 'orrin',
  description: 'crm dashboard',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    github: 'https://github.com/subhajitorrin/dashboard.git',
  },
};
