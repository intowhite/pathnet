import { connect } from 'react-redux'
import RepoList from '../../components/RepoList'

const mapStateToProps = (state) => ({
  userRepos: state.userRepos,
  showRepos: state.showRepos
})

export default connect(mapStateToProps)(RepoList)