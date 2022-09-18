# MC-Assignment1

## Prerequisite Install Nodejs and a package manager NPM
1. [Nodejs](https://nodejs.org/en/), [installation reference](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)

## steps to run the program:
1. Clone the repo to your local repository
2. run the below commands in the directory backend

```ruby
 $ npm install
 $ node app
```


Then "server running at PORT 8000" is logged and you are good to go.


## APIs:

POST - multipart/form-data is supported at route http://localhost:8000/upload.
Categories for images : animals, cars, travel, landscape  (keywords should be exact same inorder to upload them to the server)

example : 

###### using with HTML 
```ruby
<form action="http://localhost:8000/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="travel" />
</form>
```
###### using with Postman
1. Select POST for http://localhost:8000/upload
2. Under Body, select form-data
3. Populate form-data KEY as 'cars' (file), VALUE select the file to be uploded.
4. Click send!

