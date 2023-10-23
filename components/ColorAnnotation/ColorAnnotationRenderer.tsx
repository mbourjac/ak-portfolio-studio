import { BlockAnnotationProps } from 'sanity';
import { PortableTextColor } from './ColorAnnotation.types';
import './ColorAnnotationRenderer.style.css';

export const ColorAnnotationRenderer = (props: BlockAnnotationProps) => {
  const value = props.value as PortableTextColor | undefined;
  return (
    <span
      className="custom-color-annotation"
      style={{
        color: value?.colorData?.value,
      }}
    >
      {props.renderDefault(props)}
    </span>
  );
};
