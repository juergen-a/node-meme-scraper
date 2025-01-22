# Node.js meme-scraper

## TODOs

- [ ] Figure out how to make `memes` "ignored" in Git
- [ ] Create a `memes` directory

- [ ] Investigate how to access the website

  - [ ] Is "HTTP request" or "fetching" what we want?

- [ ] Retrieve the HTML string data from the website and store in a variable

- [ ] Extract the image `src` strings (URLs) in the HTML string (`<img>` elements) to an array of image URLs

  - [ ] Check whether the image `src` URLs work with the `?width=300`

- [ ] Separate out the first 10 image URLs from the array
- [ ] Loop over first 10 image URLs, and for each of them:

  - [ ] Access the image URL

    - [ ] Is "HTTP request" or "fetching" what we want?

  - [ ] Retrieve the image data from the website and store in a variable

  - [ ] Save the the image data to a file
    - [ ] Create a new file with a name with a 2-digit number, eg. 01.jpg, 02.jpg, ... 10.jpg.
    - [ ] Add the data

- [ ] Test program to make sure it can run multiple times

Stretch goals:

- [ ] Make the application create your own custom meme (eg. `node index.js hello karl bender` would download an image with the top text of "hello", the bottom text of "karl", with the meme image of Bender)
- [ ] Add a nice progress indicator (either messages or a progress bar)
- [ ] Create a version of your program that uses [Deno](https://deno.com/) or [Bun](https://bun.sh/) instead of Node.js
- [ ] Make your program run on any computer without Node.js or any other runtime installed by creating a [Node.js Single Executable Application](https://nodejs.org/api/single-executable-applications.html), [Deno standalone executable](https://docs.deno.com/runtime/reference/cli/compiler/) or [Bun single-file executable](https://bun.sh/docs/bundler/executables)

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Replit demo
- [ ] [Drone bot](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-git-github/#writing-commit-messages))
