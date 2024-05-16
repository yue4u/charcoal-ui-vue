import { IconButtonProps } from '@charcoal-ui/react'
import { PreviewSection } from '../_components/Previews'

export const sections: PreviewSection<IconButtonProps<'button'>>[] = [
  {
    title: 'variant',
    previewMetas: [
      {
        children: undefined,
        props: {
          icon: '24/Add',
          variant: 'Default',
        },
      },
      {
        children: undefined,
        props: {
          icon: '24/Add',
          variant: 'Overlay',
        },
      },
    ],
  },
  {
    title: 'disabled',
    previewMetas: [
      {
        children: undefined,
        props: {
          icon: '24/Add',
          variant: 'Default',
          disabled: true,
        },
      },
      {
        children: undefined,
        props: {
          icon: '24/Add',
          variant: 'Overlay',
          disabled: true,
        },
      },
    ],
  },
  {
    title: 'size',
    previewMetas: [
      {
        children: undefined,
        props: {
          icon: '24/Add',
          size: 'M',
        },
      },
      {
        children: undefined,
        props: {
          icon: '24/Add',
          size: 'S',
        },
      },
      {
        children: undefined,
        props: {
          icon: '16/Add',
          size: 'XS',
        },
      },
    ],
  },
  {
    title: 'isActive',
    previewMetas: [
      {
        children: undefined,
        props: {
          icon: '24/Add',
          variant: 'Default',
          isActive: true,
        },
      },
      {
        children: undefined,
        props: {
          icon: '24/Add',
          variant: 'Overlay',
          isActive: true,
        },
      },
    ],
  },
]
