import { defineArrayMember, defineField, defineType } from 'sanity';
import { ColorWheelIcon, LaunchIcon, LinkIcon } from '@sanity/icons';
import { SupDecoratorIcon } from '../../components/SupDecorator/SupDecoratorIcon';
import { SupDecoratorRenderer } from '../../components/SupDecorator/SupDecoratorRenderer';
import { ColorAnnotationField } from '../../components/ColorAnnotation/ColorAnnotationField';
import { ColorAnnotationInput } from '../../components/ColorAnnotation/ColorAnnotationInput';
import { ColorAnnotationRenderer } from '../../components/ColorAnnotation/ColorAnnotationRenderer';
import { PortableTextColor } from '../../components/ColorAnnotation/ColorAnnotation.types';
import { ExternalLinkAnnotationRenderer } from '../../components/LinkAnnotation/ExternalLinkAnnotationRenderer';
import { InternalLinkAnnotationRenderer } from '../../components/LinkAnnotation/InternalLinkAnnotationRenderer';

export const richText = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'array',
  description:
    'Insert line breaks with Shift + Enter and new paragraphs with Enter.',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        decorators: [
          {
            title: 'Strong',
            value: 'strong',
          },
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Underline',
            value: 'underline',
          },
          {
            title: 'Superscript',
            value: 'sup',
            icon: SupDecoratorIcon,
            component: SupDecoratorRenderer,
          },
        ],
        annotations: [
          defineArrayMember({
            name: 'color',
            title: 'Color',
            type: 'object',
            icon: ColorWheelIcon,
            fields: [
              defineField({
                name: 'colorData',
                title: 'Color Data',
                type: 'colorData',
                options: {
                  colorList: [{ label: 'Primary', value: '#F00' }],
                },
                components: {
                  field: ColorAnnotationField,
                  input: ColorAnnotationInput,
                },
              }),
            ],
            components: {
              annotation: ColorAnnotationRenderer,
            },
            validation: (rule) =>
              rule.custom<PortableTextColor>((color) =>
                color?.colorData
                  ? true
                  : 'Please assign a value or remove the annotation.'
              ),
          }),
          defineArrayMember({
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            icon: LinkIcon,
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'project' }],
              },
            ],
            components: {
              annotation: InternalLinkAnnotationRenderer,
            },
          }),
          defineArrayMember({
            name: 'externalLink',
            type: 'object',
            title: 'External Link',
            icon: LaunchIcon,
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'Url',
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                type: 'boolean',
              },
            ],
            components: {
              annotation: ExternalLinkAnnotationRenderer,
            },
          }),
        ],
      },
    }),
  ],
});
