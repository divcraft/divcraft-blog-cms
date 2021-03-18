import React from 'react';
import { TitleContainer, Wrapper } from 'components';
import { useSelector } from 'react-redux';
import {
  HeaderEditor,
  SectionEditor,
  InnerWrapper,
  AddElementButton,
} from './components';

const NewArticlePage = () => {
  const sections = useSelector((state) => state.articleData.article.sections);
  const sectionEditorList = sections.map((section) => (
    <SectionEditor key={section.sectionPosition} data={section} />
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
          <AddElementButton pattern="blue">Nowa sekcja</AddElementButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default NewArticlePage;
