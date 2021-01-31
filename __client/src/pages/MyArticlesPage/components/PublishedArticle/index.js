import React from 'react';
import { TileListItem, LinkButton } from 'components';
import {
  MainContainer,
  TextContainer,
  IconsContainer,
  LinkContainer,
  Image,
  ArticleLink,
} from './style';

const PublishedArticle = () => {
  return (
    <TileListItem pattern="big">
      <Image src="" alt="" />
      <MainContainer>
        <TextContainer>
          <ArticleLink>published article</ArticleLink>
          <IconsContainer>icons</IconsContainer>
        </TextContainer>
        <LinkContainer>
          <LinkButton pattern="blue">Podgląd</LinkButton>
          <LinkButton pattern="white">Komentarze</LinkButton>
        </LinkContainer>
      </MainContainer>
    </TileListItem>
  );
};

export default PublishedArticle;
