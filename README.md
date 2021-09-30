# Users Numbers Filteration 
In this application, 
I am building a full stack Angular 12 + Spring Boot .The back-end server uses Spring Boot, Spring Data JPA for interacting with database. The front-end will be built using Angular 12 . 

– Anyone can access the application: 
– Pagination is handled (10 users per page)
<img width="351" alt="pagination" src="https://user-images.githubusercontent.com/64013184/134788483-8edd59b2-bbed-4281-8231-83f4461576b2.PNG">

– The user can filter by country only, state only, country and state together
<img width="897" alt="Country" src="https://user-images.githubusercontent.com/64013184/134788474-9c274555-65d1-4208-b9dd-58e525d11959.PNG">
<img width="892" alt="stateAndcountries" src="https://user-images.githubusercontent.com/64013184/134788476-c5e2ba49-e1f4-42f4-b458-8bd80d848af1.PNG">

– The user can search for a number and the country code must be one of available country codes to enable search button
<img width="832" alt="phone" src="https://user-images.githubusercontent.com/64013184/134788477-c46a7998-f2d9-43ac-bd85-457a280084aa.PNG">
<img width="428" alt="disabled" src="https://user-images.githubusercontent.com/64013184/134788482-7576b1aa-11c3-4271-97c3-32f69972f36e.PNG">

– If there is not phone number with the searched phone number a message will be shown to alert the user
<img width="597" alt="invalid" src="https://user-images.githubusercontent.com/64013184/134788480-6b04f967-53bc-4110-ad07-2b1cfc543a1d.PNG">

This is the happy scenario approach.
<img width="522" alt="approach" src="https://user-images.githubusercontent.com/64013184/134789015-3eccb61b-aabe-48e4-ad32-5afa6bf9dd2a.PNG">.

Database is one table contains id, name, phone.

This is the architecture I followed as shown here.

<img width="634" alt="architecture" src="https://user-images.githubusercontent.com/64013184/134821530-54d57500-346c-42f2-84a3-7ad190479077.PNG">

I have used angular as a frontend framework,
Spring boot for backend, Jpa for interacting with database, spring aop using controller advice to handle exceptions, spring rest for RestControllers, JUNIT 5 to apply tests on project.

# How to run my application?
First use this command in back-end-app path:  mvn package
this will generate the target file and the jar
then use this command in the same path to create docker image based on docker file: docker build -t spring-boot-jumia-im .
now we have an image od our spring boot application, then we need a container to run this image
so run this command :  docker run -d --name spring-boot-container -p 8080:8080 spring-boot-jumia-im

now we have finished dockerizing our spring boot app .
Then we go to angular project path front-end-app
first run this command to generate node modules :  npm install  
then run this command to generate dist files:  ng build --prod
then run this command to build an angular image based on the docker file: docker build -t angular-image .
then run a container of this image : docker run -d --name angular-container -p 9090:80 angular-image

so in back-end-app
mvn package
docker build -t spring-boot-jumia-im .
docker run -d --name spring-boot-container -p 8080:8080 spring-boot-jumia-im

and in the front-end-app
npm install  
ng build --prod
docker build -t angular-image .
docker run -d --name angular-container -p 9090:80 angular-image

       






