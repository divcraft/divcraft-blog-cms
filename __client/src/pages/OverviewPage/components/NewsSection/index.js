import React from 'react';
import { SectionContainer } from 'components';
import {
  NewsList,
  NewsListItem,
  NewsText,
  CheckLink,
  ArticleLink,
} from './style';

const NewsSection = () => {
  return (
    <SectionContainer title="Aktualności">
      <NewsList>
        <NewsListItem>
          <NewsText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NewsText>
          <CheckLink>Sprawdź</CheckLink>
        </NewsListItem>
        <NewsListItem>
          <NewsText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NewsText>
          <CheckLink>Sprawdź</CheckLink>
        </NewsListItem>
        <NewsListItem>
          <NewsText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NewsText>
          <CheckLink>Sprawdź</CheckLink>
        </NewsListItem>
        <NewsListItem>
          <NewsText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NewsText>
          <CheckLink>Sprawdź</CheckLink>
        </NewsListItem>
      </NewsList>
    </SectionContainer>
  );
};

export default NewsSection;
