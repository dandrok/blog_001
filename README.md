# Simple blog page

The project required building a home page with fetched posts to which we can then enter and add them to favorites, there are also comments section in the posts.

The whole project was built with react.

State management - instead of redux I used context.

The data is fetching from: https://jsonplaceholder.typicode.com/

The css module was used for styling and I tried to use BEM.<br>
The overall UI is not that impressive as my main focus was functionality.

In addition I also added a counter of favorite posts, error page in case the user tries to access a non-existent page, e.g. http://localhost:3000/xyz and animation while waiting for data fetching.

```
npm install
npm start
```
