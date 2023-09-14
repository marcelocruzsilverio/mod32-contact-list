import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Contacts } from '../../components/Contact'

type ContactState = {
  items: Contacts[]
}

const initialState: ContactState = {
  items: [
    {
      id: 1,
      name: 'Marcelo Silvério da Cruz',
      number: '31 99999999',
      email: 'marcelo@contato.com'
    },
    {
      id: 2,
      name: 'Patrícia Costa',
      number: '31 912345678',
      email: 'patricia@contato.com'
    },
    {
      id: 3,
      name: 'Frederico Souza',
      number: '31 9987456123',
      email: 'fred@contato.com'
    }
  ]
}

// const initialState: ContactState = {
//   items: []
// }

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    addContact: (state, action: PayloadAction<Omit<Contacts, 'id'>>) => {
      const existingContact = state.items.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (existingContact) {
        alert('Você já cadastrou um contato com esse nome!')
      } else {
        const lastContact = state.items[state.items.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.items.push(newContact)
      }
    },
    edit: (state, action: PayloadAction<Contacts>) => {
      const contactIndex = state.items.findIndex(
        (con) => con.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    }
  }
})

export const { remove, addContact, edit } = contactSlice.actions

export default contactSlice.reducer
