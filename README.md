# Devfolio

Devfolio is a modern and production-ready personal portfolio and blog template built on GatsbyJS and styled with TailwindCSS. Easily show off your projects, experience, and skills, as well as write blog posts showcasing your knowledge.

Some of the features include:

- Built with React on GatsbyJS (however, no React knowledge required)
- Styled with Tailwind
- Simple Configuration
- Production Ready & Deploy in Seconds
- Write Blog Posts in Markdown (with Syntax Highlighting)
- Mobile Friendly
- Extend and Customize as Needed
- Blazing Fast 🙄

**[Need help with the template or have suggestions? Reach out on Twitter any time!](https://twitter.com/rfitzio)**

## Demo

For a live demo of the base template, [click here](https://elastic-meninsky-aa7c74.netlify.app/).

For a live demo of a slightly customized version of the template (my own personal site), [click here](https://rfitz.io).

## Contents

- [Adding Your Information](#adding-your-information)
  - [General](#general)
  - [About Me](#about-me)
  - [Projects](#projects)
  - [Experience](#experience)
  - [Skills](#skills)
- [Setting Up The Blog](#setting-up-the-blog)
- [Running Locally](#running-locally)
- [Deploying](#deploying)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Adding Your Information

To get started, either fork or clone the repo. Next, open `gatsby-config.js` which has configuration options under `siteMetadata`. The config comes with some default example content and code comments to make it easy to understand how to set it up. The following provides a more in-depth explanation of each section:

### General

| Option | Description | Required |
| ------ | ----------- | -------- |
| `siteUrl` | The URL of your site | Yes |
| `name` | Your name | Yes |
| `title` | The title of your site | Yes |
| `description` | The description of your site | Yes |
| `author` | Your Twitter Handle | No |
| `github` | Your GitHub Profile URL | No |
| `linkedin` | Your LinkedIn Profile URL | No |

### About Me

The _About Me_ section is defined under `about` and is a simple string type. This section is required.

### Projects

The _Projects_ section is defined as an array under the `projects` key in the config and is an optional. Projects have the following format:

```js
{
  name: 'Devfolio', // Required
  description: 'A zero-config and blazing fast personal site + blog built with GatsbyJs and TailwindCSS', // Required
  link: 'https://github.com/RyanFitzgerald/devfolio', // Optional
}
```

### Experience

The _Experience_ section is defined as an array under the `experience` key in the config and is an optional. Experience items have the following format:

```js
{
  name: 'Hooli', // Required
  description: 'Full-Stack Developer, May 2015 - December 2017', // Required
  link: 'https://github.com/RyanFitzgerald/devfolio', // Optional
},
```

### Skills

The _Skills_ section is defined as an array under the `skills` key in the config and is an optional. Skills have the following format:

```js
{
  name: 'Languages & Frameworks',
  description: 'JavaScript (ES6+), Golang, Node.js, Express.js, React, Ruby on Rails, PHP',
},
```

## Setting Up The Blog

The blog is an optional portion of the template and the content for it exists in `content/blog`. All blog posts are written in Markdown by default and the template ships with a couple sample posts. If you'd rather not have a blog, simply delete the sample posts inside the folder while ensuring that the folder itself (`content/blog`) is kept.

### Adding a New Blog Post

To create a new blog post, simply add a new URL safe folder in `content/blog` (this will be your posts URL as well). For example, if you create a folder `content/blog/hello-world`, the resulting path to your blog post will be `mysite.com/blog/hello-world`.

Next, create an `index.md` file with the following at the top of the file (including the lines):

```
---
title: My Blog Title
date: '2020-09-20T12:00:00.00Z'
description: 'Some Short Blog Post Description'
---

My blog post starts here.
```

The `title` attribute is the post's title, the date is the date that shows on the blog post, and the description if a brief excerpt of the post that shows on the home page and the blog page.

After that is done, you should now see you're latest blog post on your site (if you deploy or run it locally). If you don't, it may be because the date was entered incorrectly as the blog lists only the most recent 5 posts based on the provided dates.

## Running Locally

If you're happy with the current layout and design, you can simply edit your `gatsby-config.js` without the need to run it locally. With that said, if you want to spin it up locally, simply run `npm install` to install the required dependencies and then `npm run develop` to start the Gatsbt development server.

## Deploying

## Customization

## License

Licensed under the [MIT License](https://github.com/RyanFitzgerald/devfolio/blob/master/LICENSE.md).
