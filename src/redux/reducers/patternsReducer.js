import { LOADING_PATTERNS, FETCH_PATTERNS, FILTER_PATTERNS } from '../actions/types'

const applyFilters = (list, filters) => list.filter(it => {
    return !filters.tag || (it.tags && it.tags.includes(filters.tag))
})

const initialState = {
    recommended: [],
    deprecated: [],
    fRecommended: [],
    fDeprecated: [],
    types: [],
    loadingPatterns: false,
    filters: { tag: null }
}

export default function (state = initialState, action) {
    switch (action.type) {
    case LOADING_PATTERNS:
        return {
            ...state,
            loadingPatterns: true
        }
    case FETCH_PATTERNS:
        return {
            ...state,
            recommended: action.payload.recommended,
            deprecated: action.payload.deprecated,
            fRecommended: applyFilters(action.payload.recommended, state.filters),
            fDeprecated: applyFilters(action.payload.deprecated, state.filters),
            types: action.payload.types,
            loadingPatterns: false
        }
    case FILTER_PATTERNS:
        return {
            ...state,
            fRecommended: applyFilters(state.recommended, action.payload.filters),
            fDeprecated: applyFilters(state.deprecated, action.payload.filters),
            filters: action.payload.filters
        }
    default:
        return state
    }
}
