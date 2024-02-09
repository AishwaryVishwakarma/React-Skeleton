import React from 'react';

import './styles.css';
import type {Props, SkeletonConfig} from './types';

function createTree(config: SkeletonConfig): React.JSX.Element[] {
  return config.map((ele): React.JSX.Element => {
    const {id, style, content, duration = 1.5} = ele;

    const haveChild = content && Array.isArray(content);

    return (
      <div
        key={id}
        id={id}
        style={style}
        className='react-loading-container'
        data-react-loading-container='true'
      >
        {!haveChild && (
          <span
            style={{
              animationDuration: `${duration}s`,
            }}
          />
        )}
        {haveChild && createTree(content)}
      </div>
    );
  });
}

export const Skeleton: React.FC<Props> = ({config = [], ...rest}) => {
  const content = createTree(config);

  return <div {...rest}>{content}</div>;
};
