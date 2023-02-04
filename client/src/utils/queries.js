import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query allProfiles {
    profiles {
        _id
        email
        rentable_items
    }
}
`;

export const QUERY_SINGLE_PROFILE = gql`
    query singleProfile($profileId: ID!) {
        profile(profileId: $profileId) {
            _id
            email
            city
        }
    }
`;

