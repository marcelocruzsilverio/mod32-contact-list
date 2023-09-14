import { useDispatch, useSelector } from 'react-redux'
import { SearchInput } from './styles'
import { RootReducer } from '../../store'

import { contactFilter } from '../../store/reducers/filter'

function SearchContact() {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <div>
      <SearchInput
        type="text"
        placeholder="Buscar Contato..."
        value={term}
        onChange={(e) => dispatch(contactFilter(e.target.value))}
      />
    </div>
  )
}

export default SearchContact
