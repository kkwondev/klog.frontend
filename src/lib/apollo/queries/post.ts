import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query getPosts($lastId: Float) {
        getPosts(lastId: $lastId) {
            post {
                id
                title
                content
                slug
                thumbnail_img
                updatedAt
                user {
                    email
                    nickname
                    photo_url
                }
                category {
                    name
                }
            }
            hasMorePost
        }
    }
`;

export const GET_POST = gql`
    query readPost($url_slug: String!) {
        readPost(url_slug: $url_slug) {
            post {
                id
                title
                content
                slug
                thumbnail_img
                updatedAt
                user {
                    email
                    nickname
                    photo_url
                }
                category {
                    name
                }
            }
        }
    }
`;

export const GET_CATEGORY_POST = gql`
    query getCategoryPost($name: String!, $lastId: Float) {
        getCategoryPost(name: $name, lastId: $lastId) {
            post {
                id
                title
                content
                slug
                thumbnail_img
                updatedAt
                user {
                    email
                    nickname
                    photo_url
                }
                category {
                    name
                }
            }
            hasMorePost
        }
    }
`;

export const GET_POST_TAGS = gql`
    query getPostTags($id: Float!) {
        getPostTags(id: $id) {
            tags {
                title
            }
        }
    }
`;

export const SAVE_POST = gql`
    mutation createPost($post: CreatePostInput!) {
        createPost(post: $post) {
            success
            post {
                id
                title
                content
                slug
                thumbnail_img
                updatedAt
                user {
                    email
                    nickname
                    photo_url
                }
                category {
                    name
                }
            }
        }
    }
`;
