module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://purplehayes.me`,
    // Your Name
    name: 'Hayes Bounds',
    // Main Site Title
    title: `Hayes Bounds | Student`,
    // Description that goes under your name in main bio
    description: `Aspiring Software Engineer `,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/hebounds`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/hayes-bounds-441a7b210/`,
    // Content of the About Me section
    about: `I'm a Junior at the Liberal Arts and Science Academy in Austin, Texas and will hopefully be pursuing a degree in Computer Science in university. I am passionate about Graphic Design, specifically UI/UX, Game Design, and economic implementations of Computer Science (i.e. financial data analysis).`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Doordle',
        description:
          'A concept door that opens based on completion of a Wordle puzzle, input of an NFC tag, or OTP on a keypad.',
        link: 'https://github.com/hebounds/',
      } // maybe need a , here
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Word of Mouth Bakery',
        description: 'General Employee, June 2021 - Present',
        link: 'https://wordofmouthbakery.com/',
      } // maybe need a , here
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, C++, Python, JavaScript, C#, React, Bootstrap',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Agile, Kubernetes, Eagle, AutoCAD, LibreCAD, KiCad, Adobe Suite',
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
