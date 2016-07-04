# FirebaseTamperMonkey
Store Browser History on Firebase v3

Update the Javascript file with your Firebase Project Details in the **Config** Variable -

```
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
};
```


Set Firebase Database rules to -
```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
