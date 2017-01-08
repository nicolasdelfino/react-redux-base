import { connect } from 'react-redux'
import { toggleDummyValue, setDummyText } from '../modules/dummy'
import Dummy from '../components/Dummy'

const mapStateToProps = (state) => ({
  dummyText : state.dummy.dummyText,
  showBar: state.dummy.dummyVal
})

const mapDispatchToProps = {
  toggle: () => toggleDummyValue(),
  setText: (value) => setDummyText(value)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
