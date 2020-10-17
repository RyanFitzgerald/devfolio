# Devfolio

![Preview](https://user-images.githubusercontent.com/9112801/96329524-c8906600-101b-11eb-8fd8-4d45e7f0cd1b.jpg)

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

The blog is an optional portion of the template and the content for it exists in the `content/blog` folder. All blog posts are written in Markdown by default and the template ships with a couple sample posts so you can get an idea of what's possible (i.e. syntax highlighting). If you'd rather not have a blog, simply delete the sample posts inside the folder while ensuring that the folder itself (`content/blog`) is kept as Gatsby still looks for it. If there are no posts in the folder, you will not see a Blog link at the top nor will you see the _Latest Posts_ section on the homepage. Once you add your first post, this will re-appear.

### Adding a New Blog Post

To create a new blog post, create a new folder in `content/blog` with the name being the URL you want for the blog post. For example, if you create a folder `content/blog/hello-world`, the resulting path to your blog post will be `mysite.com/blog/hello-world`.

Next, create an `index.md` file in the new folder with the following at the top of the file (including the lines):

```
---
title: My Blog Title
date: '2020-09-20T12:00:00.00Z'
description: 'Some Short Blog Post Description'
---

My blog post starts here.
```

The portion between both lines (`---`) is the metadata for the blog post. The `title` attribute is the post's title, the `date` is the date that shows on the blog post, and the `description` is a brief excerpt of the post that shows on the home page and the blog page for the post summary. Below the metadata is where the content of your blog post would start.

After that is done, you should now see you're latest blog post on your site (if you deploy or run it locally). One thing to keep in mind is that by default, the homepage will show only the latest 5 blog posts based on the `date` field entered. If you added a new blog post but it's not showing up, it's possible that you entered an older date by accident.

## Running Locally

If you're happy with the current layout and design, you can simply edit your `gatsby-config.js` without the need to run it locally. With that said, if you want to spin it up locally, simply run `npm install` to install the required dependencies and then `npm run develop` to start the Gatsbt development server. You can also run `npm run format` to run Prettier on the code.

## Deploying

## Customization

## License

Licensed under the [MIT License](https://github.com/RyanFitzgerald/devfolio/blob/master/LICENSE.md).
