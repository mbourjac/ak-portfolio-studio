import { BlockAnnotationProps } from 'sanity';
import { LaunchIcon } from '@sanity/icons';
import { LinkAnnotationRenderer } from './LinkAnnotationRenderer';

export const ExternalLinkAnnotationRenderer = (props: BlockAnnotationProps) => {
  return (
    <LinkAnnotationRenderer
      iconComponent={<LaunchIcon style={{ padding: '0 0.465rem 0 0.25rem' }} />}
      {...props}
    />
  );
};
