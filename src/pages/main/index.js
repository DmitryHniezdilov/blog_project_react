import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Grid } from '@material-ui/core';
import FeaturedPost from '../../components/featuredPost';
import MainFeaturedPost from '../../components/mainFeaturedPost';
import PageLayout from '../../components/pageLayout';
import * as blogAction from '../../redux/actions/blog';

const Main = () => {
    const dispatch = useDispatch();
    const {blogs} = useSelector((state) => state.blog);
    const blogsNormalize = [ ...blogs ].reverse();
    const mainFuturePost = blogsNormalize[ 0 ];
    const futurePosts = blogsNormalize.slice(1);

    useEffect(() => {
        dispatch(blogAction.getBlogs());
    }, []);

    return (
        <PageLayout>
            {!!mainFuturePost && <MainFeaturedPost blog = { mainFuturePost } />}
            {!!futurePosts.length && (
                <Grid
                    container
                    spacing = { 4 }>
                    {futurePosts.map((blog) => (
                        <FeaturedPost
                            blog = { blog }
                            key = { blog.id }
                        />
                    ))}
                </Grid>
            )}
        </PageLayout>
    );
};

export default Main;
