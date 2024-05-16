// change type to module before using es module

//ES module

const posts = [
    {id:1, title: 'one',},
    {id:2, title: 'two',}
];

const getPosts = () => {
    return posts;
}

export const getPostsLength = () => posts.length;

export default getPosts;