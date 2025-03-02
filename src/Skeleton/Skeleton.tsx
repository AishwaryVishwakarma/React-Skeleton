import React from 'react';

import './styles.css';
import type {SkeletonTree} from './types';

function createSkeletonTree(tree: SkeletonTree) {
  return tree.map((node, index) => {
    const {name, nodes, className, duration = 1.8, style, ...rest} = node;

    return (
      <div
        key={name || index}
        className={`${nodes ? '' : 'skeleton'} ${className}`}
        style={{
          animationDuration: !nodes ? `${duration}s` : undefined,
          ...style,
        }}
        {...rest}
      >
        {nodes && createSkeletonTree(nodes)}
      </div>
    );
  });
}

/**
 * Skeleton component that renders a skeleton tree structure.
 *
 */
function Skeleton({tree}: {tree: SkeletonTree}) {
  return createSkeletonTree(tree);
}

export default Skeleton;
