import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { displayDate } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import {
  addMarkedArticle,
  removeMarkedArticle,
  removeToEditArticle,
  removeToGettingPublicArticle,
} from 'store/actions';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TileListItem, LinkButton, StandardButton, LinkText } from 'components';
import {
  LinkContainer,
  StyledFontAwesome,
  DataContainer,
  SemiboldText,
  StarButton,
} from './style';

const UnpublishedArticle = ({ article, pattern }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const user = useSelector((state) => state.userData.user);
  const { markedArticles } = user;
  const {
    _id,
    header: { title },
    category_id,
    updatedAt,
  } = article;
  const isMarked = markedArticles.includes(_id);
  const articleCategory = useMemo(
    () => categories.find((category) => category._id === category_id),
    [categories]
  );
  const handleMarkArticle = () => {
    if (!isMarked) {
      dispatch(addMarkedArticle(_id, user));
    } else {
      dispatch(removeMarkedArticle(_id, user));
    }
  };
  const handleRemoveFromPublication = () => {
    Axios.put(`/api/articles/${_id}?toUpdate=isFinished`, {
      isFinished: false,
    })
      .then((res) => {
        const articleId = res.data;
        dispatch(removeToGettingPublicArticle(articleId));
      })
      .catch((err) => {
        throw err;
      });
  };
  const handleDeleteArticle = () => {
    Axios.delete(`/api/articles/${_id}`)
      .then((res) => {
        const articleId = res.data;
        dispatch(removeToEditArticle(articleId));
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <TileListItem pattern="big">
      <img src="" alt="" />
      <div>
        <div>
          <div>
            <LinkText pattern="noUnderline" to="/">
              {title}
            </LinkText>
          </div>
          <DataContainer>
            <span>
              <StarButton type="button" onClick={() => handleMarkArticle()}>
                <StyledFontAwesome icon={faStar} isMarked={isMarked} />
              </StarButton>
            </span>
            <span>
              <SemiboldText>Ostatnio zmodyfikowano: </SemiboldText>
              {displayDate(updatedAt)}
            </span>
            <span>
              <SemiboldText>Kategoria: </SemiboldText>
              {articleCategory.name}
            </span>
          </DataContainer>
        </div>
        <LinkContainer>
          <LinkButton to="/" pattern="white">
            Podgląd
          </LinkButton>
          <LinkButton to={`/edytuj-artykul/${_id}`} pattern="white">
            Edytuj
          </LinkButton>
          {pattern === 'toGettingPublic' ? (
            <StandardButton
              onClick={handleRemoveFromPublication}
              pattern="blueWide"
            >
              Wycofaj z publikacji
            </StandardButton>
          ) : (
            <StandardButton onClick={handleDeleteArticle} pattern="blueWide">
              Usuń
            </StandardButton>
          )}
        </LinkContainer>
      </div>
    </TileListItem>
  );
};

UnpublishedArticle.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
  pattern: PropTypes.oneOf(['toGettingPublic', 'toEdit']).isRequired,
};

export default UnpublishedArticle;
