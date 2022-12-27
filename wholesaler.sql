-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Dec 27, 2022 at 05:29 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wholesaler`
--

-- --------------------------------------------------------

--
-- Table structure for table `retailer`
--

DROP TABLE IF EXISTS `retailer`;
CREATE TABLE IF NOT EXISTS `retailer` (
  `id` int(200) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `mobile_number` int(200) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `retailer`
--

INSERT INTO `retailer` (`id`, `name`, `mobile_number`, `date`) VALUES
(1, 'retailer1', 1234567890, '2022-12-26 22:34:32'),
(2, 'retailer2', 1234567890, '2022-12-26 22:34:32'),
(3, 'retailer3', 1234567890, '2022-12-26 22:34:32'),
(4, 'retailer4', 1234567890, '2022-12-26 22:34:32'),
(5, 'retailer5', 1234567890, '2022-12-26 22:34:32'),
(6, 'retailer6', 1234567890, '2022-12-26 22:34:32');

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `wholesaler_id` int(200) NOT NULL,
  `retailer_id` int(200) NOT NULL,
  `amount` int(200) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`wholesaler_id`, `retailer_id`, `amount`, `date`) VALUES
(1, 1, 100, '2022-12-26 18:09:44'),
(2, 1, 50, '2022-12-26 18:09:44'),
(4, 1, 100, '2022-12-26 18:09:44'),
(1, 2, 124, '2022-12-26 18:09:44'),
(2, 2, 156, '2022-12-26 18:09:44'),
(3, 2, 244, '2022-12-26 18:11:07'),
(1, 3, 88, '2022-12-26 18:11:07'),
(2, 3, 600, '2022-12-26 18:11:07'),
(5, 4, 200, '2022-12-26 18:11:07');

-- --------------------------------------------------------

--
-- Table structure for table `wholesalers`
--

DROP TABLE IF EXISTS `wholesalers`;
CREATE TABLE IF NOT EXISTS `wholesalers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `mobile_number` int(200) NOT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `wholesalers`
--

INSERT INTO `wholesalers` (`id`, `name`, `mobile_number`, `date`) VALUES
(1, 'wholesaler1', 1234567890, '2022-12-26 18:13:26'),
(2, 'wholesaler2', 1234567890, '2022-12-26 18:13:26'),
(3, 'wholesaler3', 1234578900, '2022-12-26 18:13:26'),
(4, 'wholesaler4', 1234567890, '2022-12-26 18:13:26'),
(5, 'wholesaler5', 1234567890, '2022-12-26 18:13:26'),
(6, 'wholesaler6', 1234567890, '2022-12-26 18:13:26');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
