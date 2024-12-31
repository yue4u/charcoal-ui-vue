const { light, dark } = require('@charcoal-ui/theme')
const { createTailwindConfig } = require('@charcoal-ui/tailwind-config')

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: false,
  content: ['**/*.tsx'],
  presets: [
    createTailwindConfig({
      version: 'v3',
      theme: {
        ':root': light,
        '[data-dark="true"]': dark,
      },
      cssVariablesV1: false,
      unstableTokenV2: true,
    }),
  ],
  corePlugins: {
    preflight: false,
  },
  safelist: [{ pattern: /.*/ }],
}
