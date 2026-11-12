import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Forward Deployed Engineer Field Guide',
  description: 'A concise, source-linked review of real FDE internship and full-time postings.',
  base: '/forward-deployed-engineer-field-guide/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Role', link: '/role' },
      { text: 'Skills', link: '/skills' },
      { text: 'Internships', link: '/internships' },
      { text: 'Full-time', link: '/full-time' },
      { text: 'Postings', link: '/postings' },
    ],
    sidebar: [
      { text: 'Start here', items: [
        { text: 'Role at a glance', link: '/role' },
        { text: 'Skills employers ask for', link: '/skills' },
      ] },
      { text: 'Career stage', items: [
        { text: 'Internships', link: '/internships' },
        { text: 'Full-time roles', link: '/full-time' },
      ] },
      { text: 'Evidence', items: [
        { text: 'Posting library', link: '/postings' },
        { text: 'Method & limits', link: '/method' },
      ] },
    ],
    outline: { level: [2, 3] },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    search: { provider: 'local' },
    socialLinks: [],
  },
})
