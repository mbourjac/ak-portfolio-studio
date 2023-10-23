import { BlockDecoratorProps } from 'sanity';

export const SupDecoratorRenderer = (props: BlockDecoratorProps) => {
  return <sup>{props.renderDefault(props)}</sup>;
};
