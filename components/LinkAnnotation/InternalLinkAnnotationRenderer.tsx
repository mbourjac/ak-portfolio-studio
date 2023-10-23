import { BlockAnnotationProps } from 'sanity';
import { LinkAnnotationRenderer } from './LinkAnnotationRenderer';
import { LinkIcon } from '@sanity/icons';

export const InternalLinkAnnotationRenderer = (props: BlockAnnotationProps) => {
  return (
    <LinkAnnotationRenderer
      iconComponent={<LinkIcon style={{ padding: '0 0.3rem 0 0.075rem' }} />}
      {...props}
    />
  );
};
