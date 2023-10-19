
import { MDXProvider } from '@mdx-js/react';

const components = {}; // Add any custom components here

const MDXLayout = ({ children }) => (
    <div className="prose dark:prose-invert max-w-prose mobile:max-w-[21rem] sm:max-w-lg md:max-w-2xl lg:max-w-4xl sm:prose-sm md:prose-md lg:prose-lg mx-auto">
        <MDXProvider components={components}>{children}</MDXProvider>
    </div>
);

export default MDXLayout;