import { ButtonAddContact, Container, Credits } from './styles'

function AddContact() {
  return (
    <Container>
      <ButtonAddContact type="button" to="/register">
        👤 Adicionar Contato
      </ButtonAddContact>
      <Credits>
        Feito com <span>❤</span> por{' '}
        <a
          href="https://github.com/marcelocruzsilverio"
          target="_blank"
          rel="noreferrer"
        >
          Marcelo Cruz
        </a>
      </Credits>
    </Container>
  )
}

export default AddContact
