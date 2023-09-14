import {
  CancelButton,
  ContactContainer,
  ContactInfo,
  ContainerButton,
  EditButton,
  RemoveContactButton
} from './styles'

import { remove, edit } from '../../store/reducers/contacts'

import { useDispatch } from 'react-redux'
import { FormEvent, useEffect, useState } from 'react'
import { AddButton, Input } from '../../pages/Register/styles'
import { useNavigate } from 'react-router-dom'

export type Contacts = {
  id: number
  name: string
  number: string
  email: string
}

function Contact({ id, name, number, email }: Contacts) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState('')
  const [editedNumber, setEditedNumber] = useState('')
  const [editedEmail, setEditedEmail] = useState('')

  function handleClick() {
    setIsEditing((isEditing) => !isEditing)
    // dispatch(getContactById(id))
  }

  function handleCancel() {
    navigate('/')
  }

  useEffect(
    function () {
      if (name.length >= 0) {
        setEditedName(name)
      }
    },
    [name]
  )

  useEffect(
    function () {
      if (number.length >= 0) {
        setEditedNumber(number)
      }
    },
    [number]
  )

  useEffect(
    function () {
      if (email.length >= 0) {
        setEditedEmail(email)
      }
    },
    [email]
  )

  function addEditedContact(e: FormEvent) {
    e.preventDefault()

    const contactToAdd = {
      id,
      name: editedName,
      number: editedNumber,
      email: editedEmail
    }

    dispatch(edit(contactToAdd))
    setIsEditing(false)
    navigate('/')
  }

  return (
    <ContactContainer>
      <ContactInfo>
        <>
          {' '}
          <h3>
            Nome: <span>{name}</span>
          </h3>
          <h4>
            Número: <span>{number}</span>
          </h4>
          <p>
            <b>E-mail</b>: <span>{email}</span>
          </p>
        </>
      </ContactInfo>
      <ContainerButton>
        {!isEditing && (
          <>
            <EditButton type="button" onClick={handleClick}>
              Editar
            </EditButton>

            <RemoveContactButton
              type="button"
              onClick={() => dispatch(remove(id))}
            >
              Remover
            </RemoveContactButton>
          </>
        )}
      </ContainerButton>

      <div>
        {isEditing && (
          <form onSubmit={addEditedContact}>
            <Input
              type="text"
              placeholder="Nome completo"
              required
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Número"
              required
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
            <AddButton>Save Contact</AddButton>
            <CancelButton onClick={handleCancel}>Cancelar</CancelButton>
          </form>
        )}
      </div>
    </ContactContainer>
  )
}

export default Contact
