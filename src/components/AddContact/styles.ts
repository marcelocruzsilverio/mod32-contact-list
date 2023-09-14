import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonAddContact = styled(Link)`
  display: block;
  background: #4b9d5e;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
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
    font-size: 12px;
    border-radius: 16px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Credits = styled.p`
  text-align: center;
  color: white;
  font-size: 12px;

  a,
  span {
    font-weight: bold;
    color: #4b9d5e;
  }
`
