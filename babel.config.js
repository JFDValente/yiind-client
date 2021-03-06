module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: true,
            preprocess: false
          }
        ]
      ]
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: false,
            preprocess: false
          }
        ]
      ]
    }
  },
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
}