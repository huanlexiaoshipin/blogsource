/**
* Excerpt Helper
* @description Get the excerpt from a post
* @example
*     <%- excerpt(post) %>
*/
hexo.extend.helper.register('excerpt', function (post) {
    return post.content;
});