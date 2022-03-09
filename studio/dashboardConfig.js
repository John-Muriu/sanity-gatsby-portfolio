export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6228889fa6b4ab3c24709b0c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bzu1h5zg',
                  apiId: '7339328d-9b46-44d6-b093-1e34d16c1ad9'
                },
                {
                  buildHookId: '6228889f9fc75c39167b3104',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3g4bg7a3',
                  apiId: '91351f11-7930-40ca-8626-e0cdfb6ea3f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/John-Muriu/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3g4bg7a3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
