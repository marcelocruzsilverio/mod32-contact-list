import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { BackButton } from './styles'
import FormContact from '../../components/FormContact'

function Register() {
  return (
    <>
      <BackButton type="button" to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </BackButton>
      <FormContact />
    </>
  )
}

export default Register
