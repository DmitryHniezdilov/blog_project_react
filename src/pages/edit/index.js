import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageLayout from '../../components/pageLayout';
import PostForm from '../../components/postForm';

const Edit = () => {
    const history = useHistory();
    const {blog} = useSelector((state) => state.blog);
    const {title, content} = blog;

    useEffect(() => {
        if (!title || !content) {
            history.push('/');
        }
    }, [ ]);

    return (
        <PageLayout>
            <PostForm
                content = { content }
                title = { title }
            />
        </PageLayout>
    );
};

export default Edit;
