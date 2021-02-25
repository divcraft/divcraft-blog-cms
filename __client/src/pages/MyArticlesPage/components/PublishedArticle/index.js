import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TileListItem, LinkButton } from 'components';
import { displayDate } from 'utils';
import { useSelector } from 'react-redux';
import {
  faCalendarAlt,
  faComment,
  faStar,
  faFolderOpen,
} from '@fortawesome/free-solid-svg-icons';
import {
  MainContainer,
  TextContainer,
  IconsContainer,
  LinkContainer,
  Image,
  ArticleLink,
  StyledFontAwesome,
  Icon,
  IconText,
} from './style';

const PublishedArticle = ({ article }) => {
  const categories = useSelector((state) => state.categories.categories);
  const {
    averageRating,
    header: { title },
    category_id,
    articleComments,
    publicationDate,
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
            <ArticleLink to="/">{title}</ArticleLink>
          </div>
          <IconsContainer>
            <Icon>
              <StyledFontAwesome icon={faCalendarAlt} />
              <IconText>{displayDate(publicationDate)}</IconText>
            </Icon>
            <Icon>
              <StyledFontAwesome icon={faComment} />
              <IconText>{articleComments.length}</IconText>
            </Icon>
            <Icon>
              <StyledFontAwesome icon={faStar} />
              <IconText>{averageRating.toFixed(2)}</IconText>
            </Icon>
            <Icon>
              <StyledFontAwesome icon={faFolderOpen} />
              <IconText>{articleCategory.name}</IconText>
            </Icon>
          </IconsContainer>
        </TextContainer>
        <LinkContainer>
          <LinkButton to="/" pattern="blue">
            Podgląd
          </LinkButton>
          <LinkButton to="/" pattern="white">
            Komentarze
          </LinkButton>
        </LinkContainer>
      </MainContainer>
    </TileListItem>
  );
};

PublishedArticle.propTypes = {
  article: PropTypes.instanceOf(Object).isRequired,
};

export default PublishedArticle;
