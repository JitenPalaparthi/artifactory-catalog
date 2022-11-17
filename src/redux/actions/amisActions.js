import APIClient from '../../services/APIClient'
import { FETCH_AMIS, FILTER_AMIS, LOADING_AMIS } from './types'
import compareVersions from 'compare-versions'

export const loadAmis = () => dispatch => {
    dispatch({ type: LOADING_AMIS })
    APIClient.getAMIs()
        .then((data) => {
            const baselineAMIs = []; const contributedAMIs = []; const lastAMIs = {}; const regions = []; const oss = []

            data.forEach(it => {
                if (it.owner_id && it.owner_id === APIClient.BASELINE_OWNER_ID) {
                    baselineAMIs.push(it)
                } else {
                    contributedAMIs.push(it)
                }

                // region filter
                if (it.region && it.region.length > 0 && regions.indexOf(it.region) < 0) {
                    regions.push(it.region)
                }

                // os filter
                if (it.tags.osVersion && it.tags.osVersion.length > 0 && oss.indexOf(it.tags.osVersion) < 0) {
                    oss.push(it.tags.osVersion)
                }
            })

            // get last version by OS and Region and get options for filters
            baselineAMIs.forEach(it => {
                // get last version by OS and Region
                const key = it.region + it.tags.osVersion
                if (lastAMIs[key] === undefined || compareVersions(it.tags.blVersion, lastAMIs[key].tags.blVersion) === 1) {
                    lastAMIs[key] = it
                }
            })

            dispatch({
                type: FETCH_AMIS,
                payload: {
                    baselines: baselineAMIs,
                    contributed: contributedAMIs,
                    recommended: Object.values(lastAMIs),
                    regionList: regions.sort(),
                    osList: oss.sort()
                }
            })
        })
        .catch(() => dispatch({
            type: FETCH_AMIS,
            payload: {
                baselines: [],
                contributed: [],
                recommended: [],
                regionList: [],
                osList: []
            }
        }))
}

export const filterAmis = (filters) => dispatch => {
    dispatch({
        type: FILTER_AMIS,
        payload: {
            filters: filters
        }
    })
}
