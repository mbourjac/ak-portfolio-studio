import { ReactNode } from 'react';
import { BlockAnnotationProps } from 'sanity';
import './LinkAnnotationRenderer.style.css';

type LinkAnnotationRendererProps = BlockAnnotationProps & {
  iconComponent: ReactNode;
};

export const LinkAnnotationRenderer = (props: LinkAnnotationRendererProps) => {
  return (
    <>
      {props.iconComponent}
      <span className="custom-link-annotation">
        {props.renderDefault(props)}
      </span>
    </>
  );
};
