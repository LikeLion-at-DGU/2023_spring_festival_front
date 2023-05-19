import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';


const Input = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255);
  border-radius: 20px;
  padding: 10px 10px 10px 25px;
  border: 1px solid #DDE1DF;
  box-shadow: 1px 1px 10px 0px rgb(255, 255, 255);
  margin: 0px 30px;
  margin-bottom: 20px;



  svg {
    margin-right: 10px;
  }

  input {
    border: none;
    flex-grow: 1;
    font-size: 12px;
    color: #333;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #DDE1DF;
    }
  }
`;

function SearchHeader({searchValue,setSearchValue }) {
    
    
  
    const handleChange = (e) => {
      const value = e.target.value;
      setSearchValue(value);      
    };

    return (
    <>
        <Input>
            <input
            value={searchValue}
            onChange={handleChange}
            type="text"
            placeholder="검색어를 입력해주세요."

            />
        <AiOutlineSearch size={15} color='#DDE1DF' />
        </Input>
    </>
    );
}

export default SearchHeader;