export default {
  title: 'MojiScript',
  //  dest: 'docs',
  base: '/',
  codeSandbox: false,
  hashRouter: true,
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
    },
    body: {
      raw: `
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-225695-16"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-225695-16');
      </script>
      `
    }
  },
  themeConfig: {
    codemirrorTheme: 'dracula'
  }
}
