import { connect } from 'react-redux'
import RepoList from '../../components/RepoList'

const mapStateToProps = (state) => ({
  userRepos: state.userRepos
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(RepoList)