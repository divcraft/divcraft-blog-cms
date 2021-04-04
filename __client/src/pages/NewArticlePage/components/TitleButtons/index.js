import React from 'react';
import { LinkButton, TitleButtonsContainer } from 'components';

const TitleLinkButtons = () => {
  return (
    <TitleButtonsContainer>
      <LinkButton pattern="white" type="button">
        Podgląd
      </LinkButton>
      <LinkButton pattern="white" type="submit" form="article-editor">
        Zapisz
      </LinkButton>
    </TitleButtonsContainer>
  );
};

export default TitleLinkButtons;
