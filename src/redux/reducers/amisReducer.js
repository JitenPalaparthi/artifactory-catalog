import { LOADING_AMIS, FETCH_AMIS, FILTER_AMIS } from '../actions/types'

const applyFilters = (list, filters) => list.filter(it => {
    if (filters.region && it.region !== filters.region) return false
    return !(filters.os && it.tags.osVersion !== filters.os)
})

const initialState = {
    recommended: [],
    contributed: [],
    baselines: [],
    fRecommended: [],
    fContributed: [],
    fBaselines: [],
    loadingAMIs: false,
    regionList: [],
    osList: [],
    filters: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
    case LOADING_AMIS:
        return {
            ...state,
            loadingAMIs: true
        }
    case FETCH_AMIS:
        return {
            ...state,
            recommended: action.payload.recommended,
            contributed: action.payload.contributed,
            baselines: action.payload.baselines,
            fRecommended: applyFilters(action.payload.recommended, state.filters),
            fContributed: applyFilters(action.payload.contributed, state.filters),
            fBaselines: applyFilters(action.payload.baselines, state.filters),
            regionList: action.payload.regionList,
            osList: action.payload.osList,
            loadingAMIs: false
        }
    case FILTER_AMIS:
        return {
            ...state,
            fRecommended: applyFilters(state.recommended, action.payload.filters),
            fContributed: applyFilters(state.contributed, action.payload.filters),
            fBaselines: applyFilters(state.baselines, action.payload.filters),
            filters: action.payload.filters
        }
    default:
        return state
    }
}
