interface Node extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  duration?: number;
  nodes?: Array<Node>;
}

export type SkeletonTree = Array<Node>;
