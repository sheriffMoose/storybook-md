<div align="center">

<img src="https://github.com/sheriffMoose/storybook-md/blob/main/demo.png?raw=true"  />

<h1>Markdown Docs</h1>
<p>Storybook addon for auto importing markdown docs.</p>

[![][img.release]][link.release]
[![][img.license]][link.license]

[![][img.npm]][link.npm]
[![][img.storybook]][link.npm]

[![][img.banner]][link.npm]
</div>

<h2>Table of Contents</h2>

- [Getting started](#getting-started)

## Getting started

1. Install the addon:

```js
yarn add @sheriffmoose/storybook-md -D
```

2. Add the addon into your main.js & enable `transcludeMarkdown`

```js
module.exports = {
    ...
    "addons": [
        "@sheriffmoose/storybook-md",
        {
            name: "@storybook/addon-docs",
            options: {
                transcludeMarkdown: true
            }
        },
        ...
    ],
    ...
}
```

3. Update stories imports in main.js

```js
module.exports = {
    ...
    "stories": [
        "../*.md",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    ...
}
```

4. That's it, you're done. Now you will find README & CHANGELOG in your Storybook sidebar and you can open them and see the contents.


















[img.release]:
https://img.shields.io/github/actions/workflow/status/sheriffMoose/storybook-md/release.yml?logo=github&label=release
[img.license]:
https://img.shields.io/github/license/sheriffMoose/storybook-md?logo=github
[img.npm]:
https://img.shields.io/npm/v/@sheriffmoose/storybook-md?logo=npm&logoColor=white&labelColor=CB3837&color=grey&label=
[img.storybook]:
https://img.shields.io/npm/dependency-version/@sheriffmoose/storybook-md/dev/storybook?logo=storybook&logoColor=white&labelColor=FF4785&color=grey&label=
[img.banner]:
https://nodei.co/npm/@sheriffmoose/storybook-md.png

[link.release]:
https://github.com/sheriffMoose/storybook-md/actions/workflows/release.yml
[link.license]:
https://github.com/sheriffMoose/storybook-md/blob/main/LICENSE
[link.npm]:
https://npmjs.org/package/@sheriffmoose/storybook-md