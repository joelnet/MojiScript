export default {
  title: 'MojiScript API',
  dest: 'docs',
  base: '/MojiScript',
  codeSandbox: false,
  htmlContext: {
    head: {
      raw: `
      <style>
        .scrollbar-container {
          max-height: unset!important;
        }
      </style>
      `,
      links: [ {
        rel: 'stylesheet',
        href: 'https://codemirror.net/theme/dracula.css'
      } ]
    }
  },
  themeConfig: {
    codemirrorTheme: 'dracula'
  }
}
