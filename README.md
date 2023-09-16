### React JS 🧑‍💻
![Alt text](image.png)


1. React CDN - https://legacy.reactjs.org/docs/cdn-links.html
2. Github - https://github.com/namastedev/namaste-react
3. Discord - https://discord.com/channels/1057696352890519662/1060238868756037632/threads/1140880978752065637
4. How React internal works - https://www.youtube.com/watch?v=7YhdqIR2Yzo
5. Bundler - https://www.showwcase.com/show/26900/what-is-a-bundler
6. bundle code with parcel for production env - npx parcel build .\Inception\index.html  & remove the "main" from package.json file 
7. Last 2 version of any browsers supported using browserslist : []

### Parcel Bundler - https://github.com/parcel-bundler/parcel
1. run the server - npx parcel .\Inception\index.html
2. HMR - hot module replacement
3. File watching algorithm - written in c++
4. Light weight algo written in rust
5. Caching things so every time no need to start from scratch.
6. Image optimization
7. Consistent hashing
8. code splitting , differential bundling - support older browser and new browser
9. tree shaking
10. Diagnostic report - npx parcel build .\Inception\index.html --experimental-scope-hoisting --no-minify --no-source-maps --no-cache --log-level 4 --experimental-skip-optimization
11. Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.
12. Host on https 


### Lecture - 3 Foundation

1. package.json has script tag with the help of that we can run the command : npm run start , npm run build
2. npm run start - run the server
3. npm run build - build the code for production
4. npm run build -- --no-minify - build the code for production without minification
5. JSX make our developer life easy , JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment.
6. Babel is JS compiler which is converted JSX into react.createEkement() function
7. Babel is a JavaScript compiler. Use next generation JavaScript, today.
8. Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. ( support new script in old browser )
9. 