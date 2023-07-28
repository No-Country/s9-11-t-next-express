---
title: MeliClon-Social v1.0
language_tabs:
  - "'javascript": JavaScript'
language_clients:
  - "'javascript": ""
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="meliclon-social">MeliClon-Social v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

MeliClon-Social Api Doc. 
 Base endpoint: api/meliclon/v1/

Base URLs:

<h1 id="meliclon-social-default">Default</h1>

## AppController_getHello

<a id="opIdAppController_getHello"></a>

> Code samples

`GET /api/meliclon/v1/hello`

<h3 id="appcontroller_gethello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UsersController_create

<a id="opIdUsersController_create"></a>

> Code samples

`POST /api/meliclon/v1/users`

> Body parameter

```json
{}
```

<h3 id="userscontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateUserDto](#schemacreateuserdto)|true|none|

<h3 id="userscontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UsersController_loginUser

<a id="opIdUsersController_loginUser"></a>

> Code samples

`POST /api/meliclon/v1/users/login`

<h3 id="userscontroller_loginuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UsersController_findUser

<a id="opIdUsersController_findUser"></a>

> Code samples

`GET /api/meliclon/v1/users/current`

<h3 id="userscontroller_finduser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UsersController_update

<a id="opIdUsersController_update"></a>

> Code samples

`PATCH /api/meliclon/v1/users/{id}`

> Body parameter

```json
{}
```

<h3 id="userscontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateUserDto](#schemaupdateuserdto)|true|none|

<h3 id="userscontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## UsersController_remove

<a id="opIdUsersController_remove"></a>

> Code samples

`DELETE /api/meliclon/v1/users/{id}`

<h3 id="userscontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="userscontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="meliclon-social-followers">Followers</h1>

## CreateFollower

<a id="opIdCreateFollower"></a>

> Code samples

`POST /api/meliclon/v1/followers`

> Body parameter

```json
{
  "follower_id": "60e8a37134f59e001fde6c48",
  "following_id": "60e8a37134f59e001fde6c48"
}
```

<h3 id="createfollower-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateFollowerDto](#schemacreatefollowerdto)|true|none|

> Example responses

> 200 Response

```json
{
  "follower_id": "60e8a37134f59e001fde6c48",
  "following_id": "64af71c34bb78ce4561e0908"
}
```

<h3 id="createfollower-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Follower created|[Follower](#schemafollower)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|UnAuthorized|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Invalid Follower | A user cannot follow themselves | Duplicate followers|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Following user not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
None
</aside>

## FollowersController_findFollowerByCurrentUser

<a id="opIdFollowersController_findFollowerByCurrentUser"></a>

> Code samples

`GET /api/meliclon/v1/followers/following/current`

<h3 id="followerscontroller_findfollowerbycurrentuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## FollowersController_findFollowingCurrentUser

<a id="opIdFollowersController_findFollowingCurrentUser"></a>

> Code samples

`GET /api/meliclon/v1/followers/current`

<h3 id="followerscontroller_findfollowingcurrentuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

## FollowersController_remove

<a id="opIdFollowersController_remove"></a>

> Code samples

`DELETE /api/meliclon/v1/followers/{followingId}`

<h3 id="followerscontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|followingId|path|string|true|none|

<h3 id="followerscontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateUserDto">CreateUserDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateuserdto"></a>
<a id="schema_CreateUserDto"></a>
<a id="tocScreateuserdto"></a>
<a id="tocscreateuserdto"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_UpdateUserDto">UpdateUserDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateuserdto"></a>
<a id="schema_UpdateUserDto"></a>
<a id="tocSupdateuserdto"></a>
<a id="tocsupdateuserdto"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_CreateFollowerDto">CreateFollowerDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatefollowerdto"></a>
<a id="schema_CreateFollowerDto"></a>
<a id="tocScreatefollowerdto"></a>
<a id="tocscreatefollowerdto"></a>

```json
{
  "follower_id": "60e8a37134f59e001fde6c48",
  "following_id": "60e8a37134f59e001fde6c48"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|follower_id|string(ObjectId)|true|none|ID of the follower | ref: User|
|following_id|string(ObjectId)|true|none|ID of the follower | ref: User|

<h2 id="tocS_Follower">Follower</h2>
<!-- backwards compatibility -->
<a id="schemafollower"></a>
<a id="schema_Follower"></a>
<a id="tocSfollower"></a>
<a id="tocsfollower"></a>

```json
{
  "follower_id": "60e8a37134f59e001fde6c48",
  "following_id": "64af71c34bb78ce4561e0908"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|follower_id|string(ObjectId)|true|none|ID of the follower | ref: User|
|following_id|string(ObjectId)|true|none|ID of the follower | ref: User|

