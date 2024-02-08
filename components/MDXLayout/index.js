
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

const components = {Image}; // Add any custom components here

const MDXLayout = ({ children }) => (
  <div className="prose mx-auto dark:prose-invert max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl prose-sm md:prose-md 2xl:prose-lg">
    <MDXProvider components={components} className="">{children}</MDXProvider>
  </div>
);

export default MDXLayout;