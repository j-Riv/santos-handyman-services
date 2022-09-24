import * as React from 'react';
import type { GatsbyBrowser } from 'gatsby';
import './src/styles/global.css';
import { Layout } from './src/components/';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>;
};
