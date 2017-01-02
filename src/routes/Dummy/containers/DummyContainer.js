import { connect } from 'react-redux'

import Dummy from '../components/Dummy'

const mapStateToProps = (state) => ({
  dummyText : state.dummy.dummyText,
  showBar: state.dummy.dummyVal
})

export default connect(mapStateToProps, null)(Dummy)
