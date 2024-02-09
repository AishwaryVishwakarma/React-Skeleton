interface Config {
  id: string;
  style: React.CSSProperties;
  duration?: number;
  content?: SkeletonConfig;
}

export type SkeletonConfig = Array<Config>;

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  config: SkeletonConfig;
}
