// This is where project configuration and plugin options are located.
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Martyna Jonca - Marketing Specialist',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/personal/*.md',
        typeName: 'Personal',
        remark: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/experience/*.md',
        typeName: 'Experience',
        remark: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/education/*.md',
        typeName: 'Education',
        remark: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/skills/*.md',
        typeName: 'Skills',
        remark: {}
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/interests/*.md',
        typeName: 'Interests',
        remark: {}
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-KLLXD1HRV6'
      }
    }
  ]
}
