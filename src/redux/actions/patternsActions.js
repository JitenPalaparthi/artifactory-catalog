import APIClient from '../../services/APIClient'
import { FETCH_PATTERNS, FILTER_PATTERNS, LOADING_PATTERNS } from './types'

export const loadPatterns = () => dispatch => {
    dispatch({ type: LOADING_PATTERNS })
    APIClient.getPatterns()
        .then((data) => {
            let types = []
            data.forEach(it => { types = types.concat(it.tags || []) })
            data.sort((e1, e2) => e1.name.localeCompare(e2.name))
            dispatch({
                type: FETCH_PATTERNS,
                payload: {
                    recommended: data.filter(it => !it.tags || !it.tags.includes('deprecated')),
                    deprecated: data.filter(it => it.tags && it.tags.includes('deprecated')),
                    types: [...new Set(types)].filter(it => it !== 'deprecated')
                }
            })
        })
        .catch(() => dispatch({
            type: FETCH_PATTERNS,
            payload: {
                recommended: [],
                deprecated: []
            }
        }))
}

export const filterPatterns = (filters) => dispatch => {
    dispatch({
        type: FILTER_PATTERNS,
        payload: {
            filters: filters
        }
    })
}
