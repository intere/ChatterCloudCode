# ChatterCloudCode

This is the project that contains my Cloud Code for the Chatter app (Parse + Layer).  To create it, I installed the Parse command line, then ran:
```bash
parse new
```

I logged into my account and added this to CloudCode.


Parse told me that to run the hello world command, I could do this (which I did):

```bash
curl -X POST \
 -H "X-Parse-Application-Id: oo8ji6qUgdSCvEdDMOkjDC9whWGv0Tf7ue4znRvh" \
 -H "X-Parse-REST-API-Key: zWCZuMrFicF61VDp2pwC0H0pclAhNjXRUvqWy5xK" \
 -H "Content-Type: application/json" \
 -d '{}' \
 https://api.parse.com/1/functions/hello
```

It printed out the following:
```bash
{"result":"Hello world!"}
```
