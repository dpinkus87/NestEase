import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
    mutation addProfile($name: String!, $password: String!, $city, String!){
        addProfile(name: $name, password: $password, city, $city){
            token
            profile {
                _id
                name
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password) {
            token
            profile {
                _id
                name
            }
        }
    }
`;

export const ADD_PRODUCT = gql`
        `