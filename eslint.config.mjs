import pixiv from '@pixiv/eslint-config'

export default [
    {
        ignores: ['upstream', 'dist', 'tmp', '.storybook'],
    },
    ...pixiv.configs.vanillaTs
]