// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nameTransformer } = require('./src/transformer')

/** @type { import('style-dictionary').Config } */
module.exports = {
  source: ['tokens/base.json', 'tokens/pixiv-dark.json'],
  transform: {
    'charcoal/kebab': {
      type: 'name',
      transformer: nameTransformer,
    },
  },
  platforms: {
    css: {
      transforms: ['charcoal/kebab'],
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables_dark.css',
          format: 'css/variables',
          options: {
            selector: ":root[data-theme='dark']",
            outputReferences: true,
          },
        },
      ],
    },
  },
}
