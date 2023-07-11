# API DOCUMENTATION

---

**Base Route: `http://URL:PORT/api/meliclon/v1/`**

 <hr/>

## Auth

|    TYPE    |    DETAIL    |     ENDPOINT      |                                   DATA                                    |
| :--------: | :----------: | :---------------: | :-----------------------------------------------------------------------: |
|  **POST**  |  login user  |  **users/login**  |                         body: { email, password }                         |
|  **POST**  | create user  |    **users/**     |      body: { firstName, lastname, email, password, repeatPassword }       |
|  **GET**   | session user | **users/current** |                                                                           |
| **PATCH**  |  user by id  |   **users/:id**   | params: { id }, body: {(User Schema data or file to update avatar field)} |
| **DELETE** |  user by id  |   **users/:id**   |                              params: { id }                               |

### User Schema

| KEY      | TYPE                   | REQUIRED | DEFAULT                                        |
| -------- | ---------------------- | -------- | ---------------------------------------------- |
| email    | String                 | YES      | -                                              |
| password | String                 | YES      | -                                              |
| name     | String                 | YES      | -                                              |
| lastname | String                 | YES      | -                                              |
| role     | String-[buyer, seller] | NO       | buyer                                          |
| username | String                 | NO       | firstName.lastname.random                      |
| phone    | String                 | NO       | -                                              |
| address  | String                 | NO       | -                                              |
| avatar   | String                 | NO       | https://ui-avatars.com/api/?name=name+lastname |
| active   | Boolean                | NO       | true                                           |

<hr/>
