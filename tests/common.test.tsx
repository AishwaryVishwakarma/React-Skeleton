import {render} from '@testing-library/react';
import React from 'react';

import Skeleton from '../src/Skeleton';
import {Config} from '../src/stories/Skeleton/SkeletonConfig';

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Skeleton tree={Config} />);
  });
});
