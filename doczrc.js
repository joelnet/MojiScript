export default {
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
