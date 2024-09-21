# React-Skeleton

![NPM version][npm-image]
![Build][github-build]
![npm-typescript][npm-typescript]
![License][github-license]

Lightweight and minimalistic Skeleton component for ReactJs 🎉

### Install

```bash
npm install @aishwaryv/react-skeleton
```

### Usage

Create a config array for the skeleton, omit the type if you are using Javscript -

```ts
import type {SkeletonConfig} from '@aishwaryv/react-skeleton';

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
];
```

You can then use `Skeleton` like any other React component, passing the `config` and other attributes as needed

```jsx
import {Skeleton} from '@aishwaryv/react-skeleton';
import React from 'react';

import Config from './SkeletonConfig';

function App() {
  return <Skeleton config={Config} {...rest} />;
}

export default App;
```

## Demo

Checkout demo code sandbox here - [Sandbox](https://codesandbox.io/p/devbox/w7kqhq?file=%2Fsrc%2FApp.tsx%3A9%2C2 'Demo')

## Properties for the Config object

| Property  | Type                | Optional | Default | Description                                                                     |
| --------- | ------------------- | -------- | ------- | ------------------------------------------------------------------------------- |
| name      | String              | Yes      |         | Unique name for each element                                                    |
| className | String              | Yes      |         | Optional class name for custom styling                                          |
| style     | React.CSSProperties | No       |         | Inline styles to be applied to the container                                    |
| duration  | Number              | Yes      | `1.5`   | Duration of the animation in seconds                                            |
| content   | SkeletonConfig      | Yes      |         | Nested content, which creates additional skeleton elements within the component |

[npm-url]: https://www.npmjs.com/package/@aishwaryv/react-skeleton
[npm-image]: https://img.shields.io/npm/v/@aishwaryv/react-skeleton
[github-license]: https://img.shields.io/github/license/aishwaryvishwakarma/React-Skeleton
[github-license-url]: https://github.com/aishwaryvishwakarma/React-Skeleton/blob/master/LICENSE
[github-build]: https://github.com/aishwaryvishwakarma/React-Skeleton/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/aishwaryvishwakarma/React-Skeleton/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/@aishwaryv/react-skeleton
