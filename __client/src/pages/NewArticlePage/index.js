import React from 'react';
import Axios from 'axios';
import { TitleContainer, Wrapper } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { updateArticleSectionList, updateArticle } from 'store/actions';
import {
  HeaderEditor,
  SectionEditor,
  InnerWrapper,
  AddElementButton,
  TitleButtons,
} from './components';

const NewArticlePage = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articleData.article);
  const { sections } = article;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/api/articles', article)
      .then((res) => {
        const updatedArticle = res.data;
        console.log(article);
        console.log(updatedArticle);
        dispatch(updateArticle(updatedArticle));
      })
      .catch((err) => {
        throw err;
      });
  };
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
      <TitleContainer
        title="Nowy artykuł"
        hasButtons
        TitleButtons={TitleButtons}
      />
      <Wrapper>
        <InnerWrapper>
          <form onSubmit={handleSubmit} id="article-editor">
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
