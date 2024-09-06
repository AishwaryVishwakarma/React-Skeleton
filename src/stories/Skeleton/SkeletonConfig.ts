import type {SkeletonConfig} from '../../Skeleton';

export const Config: SkeletonConfig = [
  {
    name: 'header',
    style: {
      width: 'max-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    content: [
      {
        name: 'title',
        style: {
          height: '30px',
          width: '400px',
          background: '#dcdcdc',
          borderRadius: '6px',
        },
      },
      {
        name: 'description',
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        },
        content: [
          {
            style: {
              height: '40px',
              width: '250px',
              background: '#dcdcdc',
              borderRadius: '6px',
            },
          },
          {
            style: {
              height: '40px',
              width: '200px',
              background: '#dcdcdc',
              borderRadius: '6px',
            },
          },
        ],
      },
    ],
  },
  {
    name: 'mainDescription',
    style: {
      height: '75px',
      width: '430px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
  {
    name: 'cta',
    style: {
      height: '50px',
      width: '200px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
];
