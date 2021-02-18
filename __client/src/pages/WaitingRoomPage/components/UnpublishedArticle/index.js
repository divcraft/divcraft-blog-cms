import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TileListItem, LinkButton } from 'components';
import { displayDate } from 'utils';
import { useSelector } from 'react-redux';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  MainContainer,
  TextContainer,
  LinkContainer,
  Image,
  ArticleLink,
  StyledFontAwesome,
  DataContainer,
  Marker,
  LastUpdateDate,
  CategoryData,
  SemiboldText,
} from './style';

const UnpublishedArticle = ({ article }) => {
  const categories = useSelector((state) => state.categories.categories);
  const {
    header: { title },
    category_id,
    updatedAt,
  } = article;
  const articleCategory = useMemo(
    () => categories.find((category) => category._id === category_id),
    [categories]
  );
  return (
    <TileListItem pattern="big">
      <Image src="" alt="" />
      <MainContainer>
        <TextContainer>
          <div>
            <ArticleLink>{title}</ArticleLink>
          </div>
          <DataContainer>
            <Marker>
              <StyledFontAwesome icon={faStar} />
            </Marker>
            <LastUpdateDate>
              <SemiboldText>Ostatnio zmodyfikowano:</SemiboldText>{' '}
              {displayDate(updatedAt)}
            </LastUpdateDate>
            <CategoryData>
              <SemiboldText>Kategoria:</SemiboldText> {articleCategory.name}
            </CategoryData>
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
