
export const SELECT_FEATURE = 'SELECT_FEATURE';

interface SelectFeatureAction {
    type: typeof SELECT_FEATURE
    payload: {
        id: string // id of the feature to be selected
    }
}

export type EZGardenActionTypes = SelectFeatureAction

export interface Site {
    title: string
    heroImage: string
    logoImage: string
}

export interface Profile {
    firstName: string
    lastName: string
    avatarImage: string
    phone: string
    email: string
    bio: string
}

export interface EarthquakeMetaData {
    generated: number
    url: string
    title: string
    status: number
    api: string
    count: number
}

export interface Feature {
    id: string
    type: string
    properties: {
        mag: number
        place: string
        time: number
        updated: number
        tz: number
        url: string
        detail: string
        felt: number | null
        cdi: number | null
        mmi: any
        alert: any
        status: string
        tsunami: number
        sig: number
        net: string
        code: string
        ids: string
        sources: string
        types: string
        nst: number | null
        dmin: number | null
        rms: number | null
        gap: number | null
        magType: string
        type: string
        title: string
    }
    geometry: {
        type: string
        coordinates: number[]
    }
}

export interface EZGardenState {
    site: Site
    profile: Profile
    metaData: EarthquakeMetaData
    features: Feature[]
    currentFeature: Feature | null
}