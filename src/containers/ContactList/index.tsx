import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { Message } from './styles'

// const contacts = [
//   {
//     id: 1,
//     name: 'Marcelo Cruz',
//     number: '31 988842685',
//     email: 'marcelo@contato.com'
//   },
//   {
//     id: 2,
//     name: 'Patrícia Costa',
//     number: '31 912345678',
//     email: 'patricia@contato.com'
//   },
//   {
//     id: 3,
//     name: 'Frederico Gato',
//     number: '31 9987456123',
//     email: 'fred@contato.com'
//   }
// ]

// return items.filter((item) =>
// item.name.toLowerCase().includes(term.toLowerCase())
// )

function ContactList() {
  const { items } = useSelector((state: RootReducer) => state.contacts)
  const { term } = useSelector((state: RootReducer) => state.filter)

  const filteredContacts = () => {
    let contacts = items
    contacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    )
    return contacts
  }

  const filtered = filteredContacts()

  return (
    <div>
      <ul>
        {filtered.map((contact) => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              email={contact.email}
            />
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <Message>
          {term ? (
            <>
              <strong>Nenhum contato encontrado...</strong>
              <p>Busque por outro ou adicione um novo</p>
            </>
          ) : (
            <>
              <strong>Sua lista está vazia...</strong>
              <p>Adicione seus contatos para começar a interagir</p>
            </>
          )}
        </Message>
      )}
    </div>
  )
}

export default ContactList
