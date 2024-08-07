# Setting Up Flask SQLAlchemy


# Setting Up Frontend in React with Vite

1. terminal: ```npm create vite@latest frontend -- --template react```
  - run in root folder
  - will automatically create frontend folder with Vite

2. configure ```vite.config.js``` file
```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5001"
    },
    open: true
  }
})
```
3. terminal: ```npm install -D vite```

4. terminal: ```npm run dev```

5. terminal: ```npm install react-router-dom```








install dependencies:
  -
