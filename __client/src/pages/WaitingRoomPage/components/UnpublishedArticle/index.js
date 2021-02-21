import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TileListItem, LinkButton } from 'components';
import { displayDate } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import { addMarkedArticle, removeMarkedArticle } from 'store/actions';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  MainContainer,
  TextContainer,
  LinkContainer,
  Image,
  ArticleLink,
  StyledFontAwesome,
  DataContainer,
  SemiboldText,
  StarButton,
} from './style';

const UnpublishedArticle = ({ article }) => {
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
      <Image src="" alt="" />
      <MainContainer>
        <TextContainer>
          <div>
            <ArticleLink>{title}</ArticleLink>
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
        </TextContainer>
        <LinkContainer>
          <LinkButton pattern="blue">Podgląd</LinkButton>
          <LinkButton pattern="white">Komentarze</LinkButton>
        </LinkContainer>
      </MainContainer>
    </TileListItem>
  );
};

UnpublishedArticle.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
  // pattern: PropTypes.oneOf(['toGettingPublic', 'toEdit']).isRequired,
};

export default UnpublishedArticle;
