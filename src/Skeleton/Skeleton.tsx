import React from 'react';

import './styles.css';
import type {Props, SkeletonConfig} from './types';

/**
 * Creates skeleton elements based on the provided configuration.
 * @param config - The configuration for creating skeleton elements.
 * @returns An array of React nodes representing the skeleton elements.
 */
function createSkeletonElements(config: SkeletonConfig): React.ReactNode[] {
  return config.map((element): React.ReactNode => {
    const {id, className, style, content, duration = 1.5} = element;
    const hasChild = content && Array.isArray(content);

    const containerDataAttribute = hasChild ? 'true' : 'false';
    const loadingElementDataAttribute = hasChild ? 'false' : 'true';

    const skeletonElement = (
      <div
        key={id}
        style={style}
        className={`react-loading-element ${className}`}
        data-react-loading-container={containerDataAttribute}
        data-react-loading-element={loadingElementDataAttribute}
      >
        {!hasChild && (
          <span
            style={{
              animationDuration: `${duration}s`,
            }}
          />
        )}
        {hasChild && createSkeletonElements(content)}
      </div>
    );

    return skeletonElement;
  });
}

/**
 * Renders a skeleton component with configurable elements.
 */
export const Skeleton: React.FC<Props> = ({config = [], ...rest}) => {
  const skeletonElements = React.useMemo(
    () => createSkeletonElements(config),
    [config]
  );

  return (
    <div {...rest} data-react-loading-skeleton='true'>
      {skeletonElements}
    </div>
  );
};
