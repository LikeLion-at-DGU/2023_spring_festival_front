import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';


const SearchHeaderWrapper = styled.div`
margin-top: 40px;
  height: 100%; /* 높이 설정 */

`

const Input = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  background-color: #FFE9F0;
  padding: 10px 10px 10px 25px;
  border: 1px solid #FFE9F0;
  box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
  margin: 0px 30px;
  margin-bottom: 20px;
  width: 334px;
  height: 100%; /* 높이 설정 */

  z-index: 1;



  svg {
    margin-right: 10px;
  }

  input {
    border: none;
    flex-grow: 1;
    font-size: 12px;
    background-color: #FFE9F0;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #FC8CAE;
    }
  }
`;

function SearchHeader({searchValue,setSearchValue }) {
    
    
  
    const handleChange = (e) => {
      const value = e.target.value;
      setSearchValue(value);      
    };

    return (
    <SearchHeaderWrapper>
        <Input>
            <input
            value={searchValue}
            onChange={handleChange}
            type="text"
            placeholder="검색어를 입력해주세요."

            />
            <AiOutlineSearch size={15} color='#FC8CAE' />
        </Input>
    </SearchHeaderWrapper>
    );
}

export default SearchHeader;