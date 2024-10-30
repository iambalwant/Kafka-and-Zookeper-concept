#Kafka-Zookeeper CLI Project

##Overview
This repository contains a Command-Line Interface (CLI) Project for managing Apache Kafka and Zookeeper. Kafka is a distributed streaming platform used to build real-time data pipelines and streaming applications, while Zookeeper coordinates distributed systems, offering features such as configuration management and service discovery. Together, they enable a robust data streaming system that is resilient and scalable.
This CLI project provides convenient commands to manage Kafka topics, producers, and consumers, and to interact with Zookeeper, allowing users to administer and monitor Kafka clusters from the terminal.

##Features

Kafka Topic Management: Create, delete, list, and describe Kafka topics.
Producer and Consumer Operations: Produce and consume messages directly from the CLI.
Zookeeper Integration: Easily connect to Zookeeper to manage configurations.
Error Handling and Logging: Offers meaningful error messages and detailed logs for troubleshooting.

##Requirements

Docker: Kafka and Zookeeper can be set up using Docker for ease of deployment. Install Docker if you haven't already. Download Docker.
Apache Kafka: Ensure Kafka is installed and running. Alternatively, you can use Docker to run Kafka. Download Kafka
Apache Zookeeper: Zookeeper should also be installed as Kafka relies on it for distributed coordination. Download Zookeeper
Node.js: This CLI is built with Node.js, so ensure you have Node.js (>=14.x) and npm installed. Download Node.js

##Command's for docker 

```js

//Start Zookeper Container and expose PORT 2181
docker run -p 2181:2181 zookeeper

//Start Kafka Container, expose PORT 9092 and setup ENV variables.
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```