import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TileListItem, LinkButton } from 'components';
import { displayDate } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import { addMarkedArticle, removeMarkedArticle } from 'store/actions';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  LinkContainer,
  ArticleLink,
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
  return (
    <TileListItem pattern="big">
      <img src="" alt="" />
      <div>
        <div>
          <div>
            <ArticleLink to="/">{title}</ArticleLink>
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
          <LinkButton to="/" pattern="white">
            Edytuj
          </LinkButton>
          {pattern === 'toGettingPublic' ? (
            <LinkButton to="/" pattern="blueWide">
              Wycofaj z publikacji
            </LinkButton>
          ) : (
            <LinkButton to="/" pattern="blueWide">
              Usuń
            </LinkButton>
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
