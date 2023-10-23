import { defineArrayMember, defineField, defineType } from 'sanity';
import { YoutubeVideoInput } from '../../components/YoutubeVideoInput/YoutubeVideoInput';
import { getEmbedYoutubeUrl } from '../../components/YoutubeVideoInput/YoutubeVideoInput.utils';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadataObject',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'richText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'image',
          title: 'Image',
          type: 'image',
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            }),
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
      description:
        'This image will be displayed on the home page. You can select an image that has already been uploaded to the gallery. If no cover is provided, the first image from the gallery will be used.',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Youtube Video URL',
      type: 'string',
      components: {
        input: YoutubeVideoInput,
      },
      validation: (rule) =>
        rule.custom((videoUrl) => {
          if (typeof videoUrl === 'undefined') {
            return true;
          }

          return getEmbedYoutubeUrl(videoUrl)
            ? true
            : 'Please provide a valid youtube url.';
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cover: 'cover',
      firstImage: 'images.0.asset',
    },
    prepare({ title, cover, firstImage }) {
      return {
        title,
        media: cover ?? firstImage,
      };
    },
  },
});
