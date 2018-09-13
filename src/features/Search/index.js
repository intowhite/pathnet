import { connect } from 'react-redux'
import Search from '../../components/Search'
import { updateSearchTerm, selectUser } from './actions'

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  selectedUser: state.selectedUser
})

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: (term) => dispatch(updateSearchTerm(term)),
  selectUser: (user) => dispatch(selectUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(Search)