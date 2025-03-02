import type {SkeletonTree} from '../../Skeleton';

export const Config: SkeletonTree = [
  {
    name: 'container',
    style: {
      height: 'max-content',
      width: '25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    nodes: [
      {
        name: 'header',
        nodes: [
          {
            name: 'title',
            style: {
              height: '2rem',
              width: '10rem',
              borderRadius: '0.5rem',
            },
          },
          {
            name: 'subtitle',
            style: {
              height: '1rem',
              width: '50%',
              borderRadius: '0.25rem',
              marginTop: '0.5rem',
            },
          },
        ],
      },
      {
        name: 'form',
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        },
        nodes: [
          {
            name: 'input-box-1',
            style: {
              height: '4rem',
              width: '100%',
              borderRadius: '0.5rem',
            },
          },
          {
            name: 'input-box-2',
            style: {
              height: '4rem',
              width: '100%',
              borderRadius: '0.5rem',
            },
          },
          {
            name: 'button',
            style: {
              height: '2rem',
              width: '100%',
              borderRadius: '0.5rem',
              marginTop: '1rem',
            },
          },
        ],
      },
    ],
  },
];
