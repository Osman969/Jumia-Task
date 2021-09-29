FROM openjdk:8-jdk-alpine
EXPOSE 9000
FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/customers-0.0.1-SNAPSHOT.jar
WORKDIR /opt/app
COPY ${JAR_FILE} app.jar
COPY sample.db /opt/app
ENTRYPOINT ["java","-jar","app.jar"]
