import styled from 'styled-components'

export const SearchInput = styled.input`
  width: 100%;
  background: #00008b;
  border: 2px solid #4169e1;
  color: #fff;
  padding: 0px 30px;
  border-radius: 999px;
  transition: 0.4s;
  height: 40px;

  &:focus {
    outline: none;
    border-color: #4b9d5e;
  }

  &::placeholder {
    color: #fff;
  }
`
