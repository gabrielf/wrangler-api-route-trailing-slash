# Repo for reproduction of next-on-pages/wrangler bug

`test.sh` builds the project, starts it using both `npm run dev` and `next-on-pages`/`wrangler`, runs test cases and kills the server.

Run `./test.sh` to run a test case against both `npm run dev` and `next-on-pages`/`wrangler`.

Run `./test.sh 2> /dev/null` to avoid progress output to get:

```markdown

# Test API routes + trailingSlash

i18n:       on
middleware: present

## npm run dev

* pages router
  * Without slash: 308
  * With slash:    200
* app router
  * Without slash: 308
  * With slash:    200


## wrangler

* pages router
  * Without slash: 200 ❗️
  * With slash:    404 ‼️
* app router
  * Without slash: 200 ❗️
  * With slash:    404 ‼️
```

The project was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
