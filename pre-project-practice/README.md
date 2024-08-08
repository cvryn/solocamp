# Setting Up Flask-SQLAlchemy + Alembic

1. initialze database: ```pipenv run flask db init```

2. create migration files: ```flask db migrate -m "migration-file-name"

3. create tables: ```pipenv run flask upgrade```

4. import seed dependency: ```from flask.cli import AppGroup```

5. seed data: ```pipenv run flask seed all```

6. undo seed data: ```pipenv run flask seed undo```


# Setting Up Frontend in React with Vite

1. in root: ```npm create vite@latest frontend -- --template react```
  - run in root folder
  - will automatically create frontend folder with Vite

2. in frontend: ```npm install```

3. in frontend: ```npm run dev```

4. configure ```vite.config.js``` file
```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://127.0.0.1:8000"
    },
    open: true
  }
})
```

5. in frontend: ```npm install react-router-dom```


## Listening to Ports

1. in terminal: ```lsof -i```
  - can specifiy specific port at the end: ```lsof -i :5000```

2. in terminal: ```kill -9 <PID>```
