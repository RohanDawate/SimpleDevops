FROM openjdk:8
#VOLUME /tmp
EXPOSE 8090
#ADD target/request-tracker-0.0.1-SNAPSHOT.jar requesttrackerdocker.jar
ADD target/req-java.jar req-java.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/req-java.jar"]
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/requesttrackerdocker.jar"]
