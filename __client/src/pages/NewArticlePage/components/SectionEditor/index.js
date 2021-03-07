import React from 'react';
import PropTypes from 'prop-types';
import { PARAGRAPH, SUBTITLE, IMAGE, CODE, LIST } from 'constants';
import { SectionContainer } from 'components';
import { SectionTitle } from './style';

const SectionEditor = ({ data: { title, items } }) => {
  const sectionItemList = items.map(({ type, content }) => {
    switch (type) {
      case PARAGRAPH:
        return <p>{content}</p>;
      case SUBTITLE:
        return <h3>{content}</h3>;
      case IMAGE:
        return <img src={content.src} alt={content.alt} />;
      case CODE:
        return <code>{content}</code>;
      case LIST:
        return (
          <ul>
            {content.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {sectionItemList}
    </SectionContainer>
  );
};

SectionEditor.propTypes = {
  data: PropTypes.instanceOf(Object),
};

export default SectionEditor;
