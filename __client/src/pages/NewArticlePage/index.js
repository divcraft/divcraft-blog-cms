import React, { useState } from 'react';
import { TitleContainer, Wrapper } from 'components';
import { HeaderEditor, SectionEditor } from './components';

const NewArticlePage = () => {
  const [articleData, setArticleData] = useState({
    header: {
      title: '',
      subtitle: '',
    },
    sections: [
      {
        title: 'section title',
        items: [
          {
            type: ['paragraph', 'subtitle', 'image', 'code', 'list'],
            content: '',
          },
        ],
      },
    ],
  });
  if (!articleData) setArticleData();
  const sectionEditorList = articleData.sections.map((section) => (
    <SectionEditor data={section} />
  ));
  return (
    <>
      <TitleContainer header={articleData.header} title="Nowy artykuł" />
      <Wrapper>
        <form>
          <HeaderEditor />
          {sectionEditorList}
        </form>
      </Wrapper>
    </>
  );
};

export default NewArticlePage;
