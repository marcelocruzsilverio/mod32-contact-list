import { FormEvent, useState } from 'react'
import { AddButton, Input } from '../../pages/Register/styles'
import { useDispatch } from 'react-redux'

import { addContact } from '../../store/reducers/contacts'
import { useNavigate } from 'react-router-dom'

function FormContact() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  function addNewContact(e: FormEvent) {
    e.preventDefault()

    const contactToAdd = {
      name,
      number,
      email
    }

    dispatch(addContact(contactToAdd))
    navigate('/')
  }

  return (
    <form onSubmit={addNewContact} name={name}>
      <Input
        type="text"
        placeholder="Nome completo"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Número"
        required
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AddButton>Save Contact</AddButton>
    </form>
  )
}

export default FormContact
