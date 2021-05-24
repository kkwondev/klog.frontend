import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { postsState } from '../../../atoms/postsState';
import { GET_POSTS } from '../../../lib/apollo/queries/posts';

export default function getPostsApi() {
    const { data, loading, fetchMore } = useQuery(
        GET_POSTS,
        {
            notifyOnNetworkStatusChange: true,
        }
        // https://github.com/apollographql/apollo-client/issues/1617
    );

    const onLoadMore = useCallback(
        async (lastId: number) => {
            await fetchMore({
                variables: {
                    lastId,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return fetchMoreResult;
                },
            });
        },
        [fetchMore]
    );
    return {
        data,
        loading,
        onLoadMore,
    };
}
