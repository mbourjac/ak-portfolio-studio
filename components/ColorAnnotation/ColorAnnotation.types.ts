import { ObjectOptions, ObjectSchemaType, PortableTextObject } from 'sanity';

export interface Color {
  label: string;
  value: string;
}

export interface ColorOptions extends ObjectOptions {
  colorList?: Color[];
  enableAlpha: boolean;
}

export type ColorSchema = Omit<ObjectSchemaType, 'options'> & {
  options?: ColorOptions;
};

export interface PortableTextColor extends PortableTextObject {
  colorData: Color;
}
