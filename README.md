# Node Base Server Installer

This npm library helps you to bootstrap a Nodejs API-rest server.
You can also use it to plug-in to the project several useful components for executing common server tasks, such as: database CRUD operations, VPN connection handling, adding new API-rest access points, and so on.


# Installation

For unix-based OS:


**Clone the repository:**

```
git clone https://github.com/santidesimone/node-base-installer.git
```

**To install globally (and locally) this npm module, run:**

```
cd node-base-installer
```

```
sudo npm i -g $(pwd)
```

# How to use it

*createServer* and  *addPlugin*  commands are now globally exposed for you to use them.

**Test commands**

Type the *createServer* command and hit enter:
``` 
createServer
```
Result will be printed in terminal.

Type the *addPlugin* command and hit enter:
```
addPlugin 
```
Result will be printed in terminal.

# Uninstalling

```
sudo npm uninstall -g $(pwd)
```

_ToDo: shold be uploaded to npmjs as a public module_
