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
import type {SkeletonTree} from '@aishwaryv/react-skeleton';

export const Config: SkeletonTree = [
  {
    name: 'container',
    // 💡 You can also use className instead of passing styles directly
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
```

You can then use `Skeleton` like any other React component, passing the `tree` and other attributes as needed

```jsx
import React from 'react';

import Skeleton from '../../Skeleton';
import {Config} from './SkeletonConfig';

function App() {
  return <Skeleton tree={Config} {...rest} />;
}

export default App;
```

## Demo

Checkout demo code sandbox here - [Sandbox](https://codesandbox.io/p/devbox/w7kqhq?file=%2Fsrc%2FApp.tsx%3A9%2C2 'Demo')

## Properties for the Config object

| Property | Type         | Optional | Default | Description                                                                |
| -------- | ------------ | -------- | ------- | -------------------------------------------------------------------------- |
| name     | String       | Yes      |         | Unique name for each element                                               |
| duration | Number       | Yes      | `1.8`   | Duration of the animation in seconds                                       |
| nodes    | SkeletonTree | Yes      |         | Nested content, which creates additional skeleton elements within the node |

[npm-url]: https://www.npmjs.com/package/@aishwaryv/react-skeleton
[npm-image]: https://img.shields.io/npm/v/@aishwaryv/react-skeleton
[github-license]: https://img.shields.io/github/license/aishwaryvishwakarma/React-Skeleton
[github-license-url]: https://github.com/aishwaryvishwakarma/React-Skeleton/blob/master/LICENSE
[github-build]: https://github.com/aishwaryvishwakarma/React-Skeleton/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/aishwaryvishwakarma/React-Skeleton/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/@aishwaryv/react-skeleton
