/* eslint-disable no-undef */
import Code from './code';
import { H1, H2 } from './headline';
import Paragraph from './paragraph';
import { Pre } from './pre';
import Anchor from './anchor';

const MDXComponents = {
  h1: H1,
  h2: H2,
  pre: Pre,
  p: Paragraph,
  code: Code,
  a: Anchor,
} as any;

export default MDXComponents;

export * from './headline';
export * from './pre';
export * from './paragraph';
