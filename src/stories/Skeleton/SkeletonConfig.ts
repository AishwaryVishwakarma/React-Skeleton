import type {SkeletonConfig} from '../../Skeleton';

export const Config: SkeletonConfig = [
  {
    id: 'header',
    style: {
      width: 'max-content',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
    content: [
      {
        id: 'title',
        style: {
          height: '30px',
          width: '400px',
          background: '#dcdcdc',
          borderRadius: '6px',
        },
      },
      {
        id: 'description',
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        },
        content: [
          {
            id: 'desc1',
            style: {
              height: '40px',
              width: '250px',
              background: '#dcdcdc',
              borderRadius: '6px',
            },
          },
          {
            id: 'desc2',
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
    id: 'mainDescription',
    style: {
      height: '75px',
      width: '430px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
  {
    id: 'cta',
    style: {
      height: '50px',
      width: '200px',
      background: '#dcdcdc',
      borderRadius: '6px',
    },
  },
];
