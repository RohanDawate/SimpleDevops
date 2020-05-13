FROM openjdk:8
EXPOSE 8090
ADD target/req-java.jar req-java.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/req-java.jar"]
