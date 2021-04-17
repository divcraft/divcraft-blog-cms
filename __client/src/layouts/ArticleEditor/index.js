import React, { useEffect } from 'react';
import Axios from 'axios';
import { Wrapper } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateArticleSectionList,
  updateArticle,
  addUserId,
  clearArticleData,
} from 'store/actions';
import {
  HeaderEditor,
  SectionEditor,
  InnerWrapper,
  AddElementButton,
} from './components';

const NewArticlePage = () => {
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articleData);
  const userId = useSelector((state) => state.userData.user._id);
  const { sections } = articleData.article;
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/api/articles', articleData)
      .then((res) => {
        const updatedArticle = res.data;
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
  useEffect(() => {
    dispatch(addUserId(userId));
    return () => {
      dispatch(clearArticleData());
    };
  }, []);
  return (
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
  );
};

export default NewArticlePage;
