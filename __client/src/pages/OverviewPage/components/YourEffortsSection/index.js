import React from 'react';
import { SectionContainer } from 'components';
import { LineItem, Text, Underline } from './style';

const YouEffortsSection = () => {
  return (
    <SectionContainer title="Twoje wyniki">
      <LineItem>
        <Text>Napisane artykuły:</Text>
        <Text>21</Text>
      </LineItem>
      <LineItem>
        <Text>Łączna ilość odsłon Twoich artykułów:</Text>
        <Text>21</Text>
      </LineItem>
      <LineItem>
        <Text>Średnia ocena za wszystkie artykuły:</Text>
        <Text>21</Text>
      </LineItem>
      <LineItem>
        <Text>Najnowszy opublikowany artykuł:</Text>
        <Underline>
          Dbam o RAM, czyli jak uniknąć przeciążenia przeglądarki
        </Underline>
        <Text>(2/09/2020)</Text>
      </LineItem>
      <LineItem>
        <Text>Najlepiej oceniany artykuł:</Text>
        <Underline>Umieszczenie elementów multimedialnych na stronie</Underline>
        <Text>(4,9)</Text>
      </LineItem>
      <LineItem>
        <Text>Najpopularniejszy artykuł:</Text>
        <Underline>Umieszczenie elementów multimedialnych na stronie</Underline>
        <Text>(233 odsłon)</Text>
      </LineItem>
    </SectionContainer>
  );
};

export default YouEffortsSection;
