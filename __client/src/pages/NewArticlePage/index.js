import React from 'react';
import { TitleContainer, Wrapper } from 'components';
import { useSelector } from 'react-redux';
import { HeaderEditor, SectionEditor, InnerWrapper } from './components';

const NewArticlePage = () => {
  const sections = useSelector((state) => state.articleData.article.sections);
  const sectionEditorList = sections.map((section) => (
    <SectionEditor data={section} />
  ));
  return (
    <>
      <TitleContainer title="Nowy artykuł" />
      <Wrapper>
        <InnerWrapper>
          <form>
            <HeaderEditor />
            {sectionEditorList}
          </form>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default NewArticlePage;
