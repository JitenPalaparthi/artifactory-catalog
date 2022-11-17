import { combineReducers } from 'redux'
import amisReducer from './amisReducer'
import patternsReducer from './patternsReducer'

export default combineReducers({
    amis: amisReducer,
    patterns: patternsReducer
})
