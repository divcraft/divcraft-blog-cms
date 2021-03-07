import React from 'react';
import { TitleContainer, Wrapper } from 'components';
import { useSelector } from 'react-redux';
import { HeaderEditor, SectionEditor } from './components';

const NewArticlePage = () => {
  const articleData = useSelector((state) => state.articleData.article);

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
