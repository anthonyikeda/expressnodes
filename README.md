Setting up the project:
```
$ mkdir rest-api
$ cd rest-api

$ sudo npm install

$ vi Makefile
```

Set up the make file to run the spec tests using mocha (because we are using local modules)

Set up Mongodb:

Go to: http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
Download the *.tar.gz file
Extract to local dir
Add <mongodb_install>/bin to PATH
```
EXPORT PATH=<mongodb_install>/bin:$PATH
```

Create db dir (anywhere)
```
mkdir /Datastore/mongodb
```

Run Mongodb with:
```
mongod --dbpath <path to mongodb>
```
