import { css } from '@emotion/react';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../atoms/authState';
import { postState } from '../../atoms/postState';
import MarkdownEditor from '../../components/MarkdownEditor/MarkdownEditor';
import MarkdownRender from '../../components/MarkdownRender/MarkdownRender';
import PostWriteTitle from '../../components/PostWriteTitle';
import media from '../../lib/styles/media';

export interface WriteProps {}
function Write({ history }: RouteComponentProps) {
    const user = useRecoilValue(userState);
    const post = useRecoilValue(postState);
    console.log(post);
    if (!user) {
        history.push('/');
    }
    return (
        <>
            <div css={left}>
                <PostWriteTitle />
                <MarkdownEditor />
            </div>
            <div css={right}>
                <div className="preview">
                    <h1>{post.title}</h1>
                    <MarkdownRender markdownText={post.content} />
                </div>
            </div>
        </>
    );
}
const left = css`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    // box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
`;

const right = css`
    min-width: 0px;
    flex: 1 1 0%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    box-shadow: rgb(0 0 0 / 2%) 0px 0px 8px;
    .preview {
        padding: 3rem;
        box-sizing: border-box;
        h1 {
            font-size: 2.5em;
            margin-bottom: 4rem;
        }
    }
    ${media.medium} {
        display: none;
    }
`;
export default withRouter(Write);