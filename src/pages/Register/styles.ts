import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SearchInput } from '../../components/SearchContact/styles'

export const BackButton = styled(Link)`
  font-size: 40px;
  color: #00008f;
  margin-bottom: 32px;
  display: block;
`

export const Input = styled(SearchInput)`
  margin-bottom: 32px;
`
export const AddButton = styled.button`
  background: #4b9d5e;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 999px;
  transition: 0.4s;
  margin-bottom: 32px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #64c97c;
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
    border-radius: 16px;
  }
`
