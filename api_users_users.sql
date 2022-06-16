-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: api_users
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ilya','Kozionov','a@mail.ru','$2a$12$cUsFdHWODyyMZXpVV8QQ4esRkAOMnB6MkPGjm0jjT5T.ev9aZOuXy',NULL,'images\\1655400199989-user.png','2022-06-16 17:07:45','2022-06-16 17:23:20'),(2,'Bulat',NULL,'b@mail.ru','$2a$12$qQnUIejflPCe2DiTn7GJdOhcfqkKqJ1Bbm1W7d7epuniAr42E1ugG',NULL,NULL,'2022-06-16 17:08:09','2022-06-16 17:08:09'),(3,'Clone',NULL,'c@mail.ru','$2a$12$G4AmxRL4CXVtE67.FtpPd.VN6lIfMd.By4Ewtbf/XXipBscZkPTKO',NULL,NULL,'2022-06-16 17:08:26','2022-06-16 17:08:26'),(4,'Dima',NULL,'d@mail.ru','$2a$12$pr6c3oDaDYuRv7mKN1R6FObixr9yRbVe3Cz7Yfabus/UOU4eLMAz2',NULL,NULL,'2022-06-16 17:08:36','2022-06-16 17:08:36'),(5,'Egor',NULL,'e@mail.ru','$2a$12$NN6Hpo1/3vO9phMzOLT6HuBLGxu7PKvvaYAFqV2WCIkmT2iNdZIS2',NULL,NULL,'2022-06-16 17:08:47','2022-06-16 17:08:47'),(6,'Felix',NULL,'f@mail.ru','$2a$12$enCKXpgxzXqqou9gJgyMeuz.oWd0ABcGKFTOUm70SF..0NzSH/W8G',NULL,NULL,'2022-06-16 17:09:29','2022-06-16 17:09:29'),(7,'Gregor',NULL,'g@mail.ru','$2a$12$ZT5.dx43k7TwBp2v3KTI5OKSU7ZBxyEHnr94/AcAHpusqoHkyKy0S',NULL,NULL,'2022-06-16 17:09:40','2022-06-16 17:09:40'),(8,'Harry',NULL,'h@mail.ru','$2a$12$pz0rCwd3In9LNv.tRrfwTeU/2FxJDa7kyHM1nNb/WT2DaRvMo0VOm',NULL,NULL,'2022-06-16 17:09:52','2022-06-16 17:09:52'),(9,'Alex',NULL,'i@mail.ru','$2a$12$tg0gCkiL6QLGfLsQHM/9VuTxHcxCzNxBCAeNKdjD5OvyjvXIjXqvy',NULL,NULL,'2022-06-16 17:10:15','2022-06-16 17:10:15'),(10,'John',NULL,'j@mail.ru','$2a$12$OT8rWrbLzHqublfWFc0j9utUX2Gq4/rKezJc.PeGiknIJsxOBctcO',NULL,NULL,'2022-06-16 17:10:31','2022-06-16 17:10:31'),(11,'Kim',NULL,'k@mail.ru','$2a$12$dThMt.gg0JA8VlLeYkdAPOFQ6EmNt/SGWHVqO1.4YvcZDT8ADn9Bm',NULL,NULL,'2022-06-16 17:10:53','2022-06-16 17:10:53'),(12,'Lena',NULL,'l@mail.ru','$2a$12$Ku5NhWpRW6t9O0glppKmvOWxWh.5jrGzeIwkpvYjdF6SnOOH/CppK',NULL,NULL,'2022-06-16 17:11:05','2022-06-16 17:11:05'),(13,'Max',NULL,'m@mail.ru','$2a$12$9P5/1pE0l/0oHPM4zK.8wewgBn/mLoCZkPk/4a881MOgw3qfa.fbG',NULL,NULL,'2022-06-16 17:11:15','2022-06-16 17:11:15'),(14,'Nilson',NULL,'n@mail.ru','$2a$12$VuKJrGLOun/iG2vT39LQ8.DkeFIa1xDQU/hMDRsq18rFgB0d6G8zi',NULL,NULL,'2022-06-16 17:11:38','2022-06-16 17:11:38'),(15,'Olgerd',NULL,'o@mail.ru','$2a$12$tmqOUCmYwMYJhpweebxt1ef5vCElmySUvlq6bjVFzuaPYYJyQoNJy',NULL,NULL,'2022-06-16 17:11:53','2022-06-16 17:11:53'),(16,'Peter',NULL,'p@mail.ru','$2a$12$awoNeJe1xjsbcefDjQyOkO37O7Oq7UOWfxy8QUmxLtJfoCX.NM4T6',NULL,NULL,'2022-06-16 17:12:05','2022-06-16 17:12:05');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-16 20:44:32