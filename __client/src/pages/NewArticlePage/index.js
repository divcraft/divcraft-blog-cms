import React from 'react';
import { TitleContainer, Wrapper } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList } from 'store/actions';
import {
  HeaderEditor,
  SectionEditor,
  InnerWrapper,
  AddElementButton,
} from './components';

const NewArticlePage = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.articleData.article.sections);
  const sectionEditorList = sections.map((section) => (
    <SectionEditor key={section.sectionPosition} data={section} />
  ));
  const handleNewSection = () => {
    const updatedSections = [
      ...sections,
      {
        sectionPosition: sections.length + 1,
        title: '',
        items: [],
      },
    ];
    dispatch(updateArticleSectionList(updatedSections));
  };
  return (
    <>
      <TitleContainer title="Nowy artykuł" />
      <Wrapper>
        <InnerWrapper>
          <form>
            <HeaderEditor />
            {sectionEditorList}
          </form>
          <AddElementButton pattern="blue" onClick={handleNewSection}>
            Nowa sekcja
          </AddElementButton>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

export default NewArticlePage;
