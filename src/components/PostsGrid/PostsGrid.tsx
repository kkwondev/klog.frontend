import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { responsePost } from '../../types/Post';
import Empty from '../../assets/images/empty_posts.svg';
import media from '../../lib/styles/media';
import PostsGridItem from '../PostsGridItem';

function PostsGrid() {
    const [items, setItems] = useState([
        {
            title: 'testtest',
            content: '가나다라마바사아차다타카치나마바사아',
            thumnbnail_img:
                'https://media.vlpt.us/images/juno7803/post/96b970e7-445c-48e2-9bc3-b6e45b55d538/recoil.png?w=640',
            category: '개발',
            createdAt: '2021-05-04',
            user: {
                email: 'kkwoncokr@gmail.com',
                nickname: '강경원',
                photo_url:
                    'https://lh5.googleusercontent.com/-lIncMlxHURw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmBNBT5zpjlqPWsuhydqKEfbGW3Tg/s100/photo.jpg',
            },
        },
    ]);
    // TODO: Post items dummu data

    console.log(items);
    useEffect(() => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 40; i++) {
            console.log('실행하냐?11');
            items.push({
                title: `post#${i}`,
                content: '가나다라마바사아차다타카치나마바사아',
                thumnbnail_img:
                    'https://media.vlpt.us/images/juno7803/post/96b970e7-445c-48e2-9bc3-b6e45b55d538/recoil.png?w=640',
                category: '개발',
                createdAt: '2021-05-04',
                user: {
                    email: 'kkwoncokr@gmail.com',
                    nickname: '강경원',
                    photo_url:
                        'https://lh5.googleusercontent.com/-lIncMlxHURw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmBNBT5zpjlqPWsuhydqKEfbGW3Tg/s100/photo.jpg',
                },
            });
        }
    }, []);
    if (items && items.length === 0) {
        return (
            <div css={empty}>
                <img src={Empty} alt="empty" />
                <p>포스트가 없습니다.</p>
            </div>
        );
    }
    return (
        <section css={block}>
            <article css={grid}>
                {items.map((item: responsePost, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <PostsGridItem post={item} key={index} />
                ))}
            </article>
        </section>
    );
}

const block = css`
    width: 100%;
    padding-right: 2rem;
    display: flex;
    justify-content: center;
    ${media.small} {
        padding-left: 1rem;
        padding-right: 1rem;
        box-sizing: border-box;
    }
`;
const grid = css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem 2rem;
    ${media.xlarge} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${media.medium} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${media.small} {
        width: 100%;
        grid-template-columns: 1fr;
    }
`;

const empty = css`
    max-width: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ${media.xlarge} {
        width: 15vw;
    }
    ${media.large} {
        width: 25vw;
    }
    ${media.small} {
        width: 30vw;
    }
    ${media.xsmall} {
        width: 45vw;
    }
    img {
        width: 100%;
    }
    p {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: -1.5px;
        text-align: center;
    }
`;

export default PostsGrid;
