
import { MDXProvider } from '@mdx-js/react';

const components = {}; // Add any custom components here

const MDXLayout = ({ children }) => (
    <div className="prose mx-auto dark:prose-invert mobile:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl sm:prose-sm md:prose-md 2xl:prose-lg">
        <MDXProvider components={components} className="">{children}</MDXProvider>
    </div>
);

export default MDXLayout;