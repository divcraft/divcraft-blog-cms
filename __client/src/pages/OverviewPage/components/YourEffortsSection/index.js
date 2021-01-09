import React, { useState, useEffect } from 'react';
import { SectionContainer } from 'components';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { LineItem, Text, Underline } from './style';

const YouEffortsSection = () => {
  const [data, setData] = useState({
    writtenArticles: null,
    otherData: null,
  });
  const user = useSelector((state) => state.userData.user);
  useEffect(() => {
    Axios.get(`/api/articles?userId=${user._id}`).then((res) =>
      setData({
        ...data,
        writtenArticles: res.data.length,
      })
    );
  }, []);
  const { writtenArticles } = data;
  console.log(data);
  return (
    <SectionContainer title="Twoje wyniki">
      <LineItem>
        <Text>Napisane artykuły:</Text>
        <Text>{writtenArticles}</Text>
      </LineItem>
      <LineItem>
        <Text>Łączna ilość odsłon Twoich artykułów:</Text>
        <Text>0</Text> {/* will be added after getting the blog public */}
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
        <Text>(0 odsłon)</Text>{' '}
        {/* will be added after getting the blog public */}
      </LineItem>
    </SectionContainer>
  );
};

export default YouEffortsSection;
