# React-Skeleton

Lightweight and minimalistic Skeleton component for ReactJs 🎉

### Install

```bash
npm install @aishwaryv/react-skeleton
```

### Usage

Create a config array for the skeleton, omit the type if you are using Javscript

```ts
import type {SkeletonConfig} from '@aishwaryv/reaact-skeleton';

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
];
```

You can then use `Skeleton` like any other React component, passing the `config` and other attributes as needed

```jsx
import React from 'react';
import {Skeleton} from '@aishwaryv/react-skeleton';

import Config from "./SkeletonConfig"

function App() {
  return (
    <Skeleton
      config={skeletonConfig}
      {...rest}"
    />
  );
}

export default App;
```

## Demo

Checkout demo codesandbox here - [Sandbox](https://codesandbox.io/p/devbox/w7kqhq?file=%2Fsrc%2FApp.tsx%3A9%2C2 'Demo')

## Properties for the Config object

| Property | Type                | Defult | Description                                                                        |
| -------- | ------------------- | ------ | ---------------------------------------------------------------------------------- |
| id       | String              |        | Unique ID for every element                                                        |
| style    | React.CSSProperties |        | Style object which will be applied to the parent container                         |
| duration | Number              | `1.5s` | Duration of the animation in seconds                                               |
| content  | SkeletonConfig      |        | Optional content can be passed to each element which will create the skeleton-tree |
