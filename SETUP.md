# Setting Up Flask-SQLAlchemy + Alembic

1. create migration folder and files: ```pipenv run flask db init```

2. create migration/revision file: ```pipenv run flask db migrate -m "initial migration"```

3. create another migration/revision file: ```pipenv run flask db revision -m "description of changes"```

4. create tables (with columns): ```pipenv run flask db upgrade```

5. drop tables: ```pipenv run flask db upgrade```

6. seed data: ```pipenv run flask seed all```

7. undo seed data: ```pipenv run flask seed undo```


# Setting Up Frontend in React with Vite

1. in root: ```npm create vite@latest frontend -- --template react```
  - run in root folder
  - will automatically create frontend folder with Vite

2. in frontend: ```npm install```

3. in frontend: ```npm outdated```

4. in frontend: ```npm update```

5. in frontend: ```npm run dev```

6. configure ```vite.config.js``` file
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


## Render Deployment
1. Merge dev to main
2. In react-vite folder, run
```
npm run build
```
3. git add, git commit, git push
4. Language: Docker (automatically detected)
5. Branch: Main
6. Instance Type: Free
7. Go to Render, < make a new web service>

### Environment Variables :
```
SECRET_KEY = <generate>
DATABASE_URL = <postgreSQL internal database url>
SCHEMA = <schema_name>
FLASK_APP=app
FLASK_ENV=production
```


## Listening to Ports

1. in terminal: ```lsof -i```
  - can specifiy specific port at the end: ```lsof -i :5000```

2. in terminal: ```kill -9 <PID>```


## Git Commands

1. ignore dev.db: ```git rm --cached instance/dev.db```
