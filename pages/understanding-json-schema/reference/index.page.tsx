import React from 'react';
import { getLayout } from '~/components/Sidebar';
import fs from 'fs';
import matter from 'gray-matter';
import StyledMarkdown from '~/components/StyledMarkdown';
import { SectionContext } from '~/context';
import { DocsHelp } from '~/components/DocsHelp';
import NextPrevButton from '~/components/NavigationButtons';

export async function getStaticProps() {
  const block1 = fs.readFileSync(
    'pages/understanding-json-schema/reference/_index.md',
    'utf-8',
  );
  const { content: block1Content } = matter(block1);
  return {
    props: {
      blocks: [block1Content],
    },
  };
}

export default function ContentExample({
  blocks,
}: {
  blocks: any[];
  frontmatter: any;
  content: any;
}) {
  const fileRenderType = '_indexmd';
  return (
    <SectionContext.Provider value='docs'>
      <StyledMarkdown markdown={blocks[0]} />
      <NextPrevButton
        prevLabel='The basics'
        prevURL='/understanding-json-schema/basics'
        nextLabel='Type-specific keywords'
        nextURL='/understanding-json-schema/reference/type'
      />
      <DocsHelp fileRenderType={fileRenderType} />
    </SectionContext.Provider>
  );
}
ContentExample.getLayout = getLayout;
