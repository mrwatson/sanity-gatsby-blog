export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de92bd82f413c74ebcda6c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jpv4cqni',
                  apiId: '6c0f319b-b0a9-442d-998a-3dd2ad43d4ce'
                },
                {
                  buildHookId: '5de92bd8c91b58b6936779cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7y9wdwjh',
                  apiId: '5c33d1ac-0d57-4c57-969b-739b3738afd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mrwatson/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7y9wdwjh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
