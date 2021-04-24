import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { useParams, withRouter } from 'react-router-dom';
import { Wrapper } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateArticleSectionList,
  updateArticle,
  addUserId,
  clearArticleData,
  clearDeletedPhotosArray,
} from 'store/actions';
import {
  HeaderEditor,
  SectionEditor,
  InnerWrapper,
  AddElementButton,
} from './components';

const ArticleEditor = ({ pattern, history }) => {
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articleData);
  const deletedPhotos = useSelector((state) => state.deletedPhotos);
  const userId = useSelector((state) => state.userData.user._id);
  const { sections } = articleData.article;
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pattern === 'newArticle') {
      Axios.post('/api/articles', articleData)
        .then((res) => {
          const articleId = res.data;
          history.push(`/edytuj-artykul/${articleId}`);
        })
        .catch((err) => {
          throw err;
        });
    } else if (pattern === 'editArticle') {
      const { article } = articleData;
      Axios.put(`/api/articles/${id}?toUpdate=article`, {
        article,
        deletedPhotos,
      })
        .then((res) => {
          const updatedArticle = res.data;
          dispatch(updateArticle(updatedArticle));
          dispatch(clearDeletedPhotosArray());
        })
        .catch((err) => {
          throw err;
        });
    }
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
      dispatch(clearDeletedPhotosArray());
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

ArticleEditor.propTypes = {
  pattern: PropTypes.oneOf(['newArticle', 'editArticle']),
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(ArticleEditor);
