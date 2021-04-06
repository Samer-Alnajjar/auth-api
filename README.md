# auth-api
Class401-Lab08


- **Branch name** : dev
- **MongoDB URI:** 
MONGODB_URI=mongodb+srv://samer:0000@cluster0.1obxq.mongodb.net/lab8?retryWrites=true&w=majority
- **Secret**
SECRET=secretkey
- **Feature requirement:**
    - Four main routes (signin/ signup/users/secret)
    - Having the ability to add users to the database.
    - Having the ability to sign in of existing users.
    - Having the ability to access all the users when signed in
    - Expiration time for token to be 15 minutes
    - Token can be used once

  
- **Tests that assert your features:**
    - [GitHub Action](https://github.com/Samer-Alnajjar/auth-api/actions)
    - Coverage

![Coverage](coverage.png)

- **UML Diagram**

  ![UML-Diagram](UML_Diagram.png)

- [Pull Request](https://github.com/Samer-Alnajjar/auth-api/pull/2)

- [Heroku-deployment](https://samer-auth-api.herokuapp.com/)

- How do I install the app or library?
  1. Clone the repo from git hub, by run the following command "git clone -repo-".
  2. Run "npm init -y".
  3. Run "npm i".
  4. Create .env file and PORT inside it.
- How do I test the app or library?
  - Just run "npm test"


- For Applications:
  - How do I run the app?
    - Run "npm start" or "node index.js"
  - How do I set up the app?
    1. Clone the repo from git hub, by run the following command "git clone -repo-".
    2. Run "npm init -y".
    3. Run "npm i".
    4. Create .env file and PORT inside it.
    5. Then run "npm start"


