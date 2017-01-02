import { connect } from 'react-redux'
import { personListAsync } from '../modules/PersonListReducer'
import PersonList from '../components/PersonList'

const mapStateToProps = (state) => ({
  users: state.personlist.users
})

const mapDispatchToProps = {
  loadPersons : () => personListAsync()
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
