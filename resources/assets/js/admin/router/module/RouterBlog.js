import AppBlog from '../../views/blog/AppBlog.vue';
import AppBlogNew from '../../views/blog/AppBlogNew.vue';
import AppBlogTag from '../../views/blog/AppBlogTag.vue';
import AppBlogCategory from '../../views/blog/AppBlogCategory.vue';
import BlogDetail from '../../views/blog/BlogDetail.vue';
import Full from '../../container/Full.vue';

export default {
  path: '/blog',
  component: Full,
  redirect: '/blog/list',
  children: [{
      path: 'list',
      name: 'Blog',
      component: AppBlog,
      meta: {
        auth: true
      }
    },
    {
      path: 'list/detail/:blogId',
      name: 'BlogDetail',
      component: BlogDetail,
      meta: {
        auth: true
      }
    },
    {
      path: 'new',
      name: 'BlogNew',
      component: AppBlogNew,
      meta: {
        auth: true
      }
    },
    {
      path: '/blog/edit-tag',
      name: 'BlogTag',
      component: AppBlogTag,
      meta: {
        auth: true
      }
    },
    {
      path: '/blog/edit-category',

      name: 'BlogCategory',
      component: AppBlogCategory,
      meta: {
        auth: true
      }
    },
    {
      path: '/blog/edit-category',
      name: 'BlogCategory',
      component: AppBlogCategory,
      meta: {
        auth: true
      }
    }
  ]
}
