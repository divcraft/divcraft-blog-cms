import React from 'react';
import { LinkButton, TitleButtonsContainer } from 'components';
import { Button } from './style';

const TitleLinkButtons = () => {
  return (
    <TitleButtonsContainer>
      <LinkButton pattern="white" type="button">
        Podgląd
      </LinkButton>
      <Button pattern="white" type="submit" form="article-editor">
        Zapisz
      </Button>
    </TitleButtonsContainer>
  );
};

export default TitleLinkButtons;
