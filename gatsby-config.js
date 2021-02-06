module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://rashidi.zin.my/`,
    // Your Name
    name: 'Rashidi Zin',
    // Main Site Title
    title: `Rashidi Zin | Software Engineer`,
    // Description that goes under your name in main bio
    description: `A curious cat who enjoys breaking things.`,
    // Optional: Twitter account handle
    author: `@shidi`,
    // Optional: Github account URL
    github: `https://github.com/rashidi`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/rashidizin/`,
    // Content of the About Me section
    about: `Software Engineer who has interest beyond technical subjects such as leadership and talent development.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    //projects: [],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'GfK',
        description: 'Senior Software Enginer & Chapter Lead, September 2014 - Present',
        link: ''
      },
      {
        name: 'TIM w.e',
        description: 'Software Engineer, April 2013 - August 2014',
        link: ''
      },
      {
        name: 'OnApp CDN',
        description: 'Software Engineer, March 2009 - January 2013',
        link: ''
      },
      {
        name: 'iMocha Consulting',
        description: 'Software Engineer, August 2007 - August 2008',
        link: ''
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Spring Boot, JavaScript',
      },
      {
        name: 'Databases',
        description: 'MongoDB, MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, CI / CD, Microservices, API design, Agile / Scrum',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
