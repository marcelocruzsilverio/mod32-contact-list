import styled from 'styled-components'

export const ContactContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  background: #00008b;
  color: white;
  border-radius: 16px;
  /* overflow: hidden; */
  padding: 24px;
  transition: 0.4s;

  display: flex;
  justify-content: space-between;

  /* display: grid;
  grid-template-columns: 1fr 1fr; */

  h4 {
    margin: 8px 0;
  }

  span {
    color: #87ceeb;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const RemoveContactButton = styled.button`
  background: #a52a2a;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 999px;
  transition: 0.4s;
  display: inline-block;
  cursor: pointer;
  &:hover {
    background: #dc143c;
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
    border-radius: 16px;
  }
`

export const EditButton = styled.button`
  background: #4b9d5e;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 999px;
  transition: 0.4s;
  display: inline-block;
  margin-bottom: 16px;
  /* margin-left: 154px; */

  cursor: pointer;
  &:hover {
    background: #64c97c;
  }

  @media (max-width: 768px) {
    padding: 10px 10px;
    margin-right: 8px;
    border-radius: 16px;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 16px;
    align-items: center;

    button {
      margin: 0px;
    }
  }
`

export const ContactInfo = styled.div`
  min-width: 320px;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`

export const CancelButton = styled(RemoveContactButton)`
  margin-left: 8px;
`
