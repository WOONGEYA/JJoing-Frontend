// components/Search.js
import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import searchIcon from 'assets/search.svg';
import styled from 'styled-components';
import { shadow } from 'styles/shadow';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 4px;
  ${shadow.shadow2};
  width: 328px;
  height: 38px;
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 12px;
`;

const Searched = styled.input`
  width: 100%;
  height: 100%;
  border: none;
`;

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <SearchWrapper>
      <Icon src={searchIcon} alt='Search' />
      <Searched
        type='search'
        placeholder='검색어를 입력해주세요.'
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />
    </SearchWrapper>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
