# meteor-test-async

How to test : 

WARN_WHEN_USING_OLD_API=true meteor run

Warning : 

```

W20240325-07:57:45.726(1)? (STDERR)           
W20240325-07:57:45.746(1)? (STDERR)    
W20240325-07:57:45.747(1)? (STDERR)    Calling method users.insert from old API on server.
W20240325-07:57:45.747(1)? (STDERR)    This method will be removed, from the server, in version 3.
W20240325-07:57:45.747(1)? (STDERR)    Trace is below:
W20240325-07:57:45.794(1)? (STDERR) [object Object]
W20240325-07:57:45.795(1)? (STDERR)     at warnUsingOldApi (packages/mongo/collection.js:21:13)
W20240325-07:57:45.795(1)? (STDERR)     at Collection.insert (packages/mongo/collection.js:561:5)
W20240325-07:57:45.795(1)? (STDERR)     at AccountsServer.insertUserDoc (packages/accounts-base/accounts_server.js:1197:27)
W20240325-07:57:45.795(1)? (STDERR)     at AccountsServer._createUserCheckingDuplicates (packages/accounts-base/accounts_server.js:1481:25)
W20240325-07:57:45.795(1)? (STDERR)     at packages/accounts-password/password_server.js:949:19
W20240325-07:57:45.795(1)? (STDERR)     at /Users/dokithonon/.meteor/packages/promise/.0.12.2.1r139hz.k8kv++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/meteor-promise/fiber_pool.js:43:40
W20240325-07:57:45.800(1)? (STDERR) 
W20240325-07:57:45.801(1)? (STDERR)    
W20240325-07:57:45.801(1)? (STDERR)    Calling method users.findOne from old API on server.
W20240325-07:57:45.801(1)? (STDERR)    This method will be removed, from the server, in version 3.
W20240325-07:57:45.801(1)? (STDERR)    Trace is below:
W20240325-07:57:45.813(1)? (STDERR) [object Object]
W20240325-07:57:45.813(1)? (STDERR)     at warnUsingOldApi (packages/mongo/collection.js:21:13)
W20240325-07:57:45.813(1)? (STDERR)     at Collection.findOne (packages/mongo/collection.js:448:5)
W20240325-07:57:45.813(1)? (STDERR)     at getUserById (packages/accounts-password/password_server.js:5:51)
W20240325-07:57:45.813(1)? (STDERR)     at AccountsServer.Accounts.addEmail (packages/accounts-password/password_server.js:829:16)
W20240325-07:57:45.813(1)? (STDERR)     at server/main.js:11:14
W20240325-07:57:45.813(1)? (STDERR)     at /Users/dokithonon/.meteor/packages/promise/.0.12.2.1r139hz.k8kv++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/meteor-promise/fiber_pool.js:43:40
W20240325-07:57:45.816(1)? (STDERR) 
W20240325-07:57:45.816(1)? (STDERR)    
W20240325-07:57:45.817(1)? (STDERR)    Calling method users.update from old API on server.
W20240325-07:57:45.817(1)? (STDERR)    This method will be removed, from the server, in version 3.
W20240325-07:57:45.817(1)? (STDERR)    Trace is below:
W20240325-07:57:45.817(1)? (STDERR) [object Object]
W20240325-07:57:45.817(1)? (STDERR)     at warnUsingOldApi (packages/mongo/collection.js:21:13)
W20240325-07:57:45.817(1)? (STDERR)     at Collection.update (packages/mongo/collection.js:680:5)
W20240325-07:57:45.817(1)? (STDERR)     at AccountsServer.Accounts.addEmail (packages/accounts-password/password_server.js:877:16)
W20240325-07:57:45.817(1)? (STDERR)     at server/main.js:11:14
W20240325-07:57:45.817(1)? (STDERR)     at /Users/dokithonon/.meteor/packages/promise/.0.12.2.1r139hz.k8kv++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/meteor-promise/fiber_pool.js:43:40


```