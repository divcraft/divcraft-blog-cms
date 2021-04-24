import React from 'react';
import { LinkButton, TitleButtonsContainer, StandardButton } from 'components';

const TitleLinkButtons = () => {
  return (
    <TitleButtonsContainer>
      <LinkButton pattern="white" type="button">
        Podgląd
      </LinkButton>
      <StandardButton pattern="white" type="submit" form="article-editor">
        Zapisz
      </StandardButton>
    </TitleButtonsContainer>
  );
};

export default TitleLinkButtons;
