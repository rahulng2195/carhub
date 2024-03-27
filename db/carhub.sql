-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 04:55 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carhub`
--

-- --------------------------------------------------------

--
-- Table structure for table `body_style`
--

CREATE TABLE `body_style` (
  `bs_id` int(11) NOT NULL,
  `bs_name` varchar(255) NOT NULL,
  `bs_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `body_style`
--

INSERT INTO `body_style` (`bs_id`, `bs_name`, `bs_status`) VALUES
(1, 'Convertible', 1),
(2, 'Coupe', 1),
(3, 'HatchBack', 1),
(4, 'Minivan', 1),
(5, 'Sedan', 1),
(6, 'Suv', 1),
(7, 'Truck', 1),
(8, 'Van', 1),
(9, 'Wagon', 1);

-- --------------------------------------------------------

--
-- Table structure for table `car_detail`
--

CREATE TABLE `car_detail` (
  `car_id` int(11) NOT NULL,
  `car_name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `millege` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `last_post` varchar(255) NOT NULL,
  `short_desc` text NOT NULL,
  `rating` float NOT NULL,
  `review` int(11) NOT NULL,
  `car_img` varchar(255) NOT NULL,
  `makes` varchar(225) NOT NULL,
  `model` varchar(255) NOT NULL,
  `trim` varchar(100) NOT NULL,
  `zip` int(11) NOT NULL,
  `distance` varchar(100) NOT NULL,
  `fuel_type` varchar(50) NOT NULL,
  `transmission` varchar(100) NOT NULL,
  `sale_type` varchar(255) NOT NULL,
  `body_style` varchar(100) NOT NULL,
  `drive_type` varchar(100) NOT NULL,
  `ex_color` varchar(100) NOT NULL,
  `interior_clr` varchar(100) NOT NULL,
  `doors` varchar(122) NOT NULL,
  `cylender` varchar(20) NOT NULL,
  `titles` varchar(50) NOT NULL,
  `sale_by` varchar(50) NOT NULL,
  `keywords` text NOT NULL,
  `last_days` varchar(50) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `car_distance`
--

CREATE TABLE `car_distance` (
  `cd_id` int(11) NOT NULL,
  `cd_dist` varchar(255) NOT NULL,
  `cd_status` int(11) NOT NULL DEFAULT 1,
  `cd_created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_distance`
--

INSERT INTO `car_distance` (`cd_id`, `cd_dist`, `cd_status`, `cd_created_on`) VALUES
(1, '25 mi.', 1, '2024-03-17 05:41:49'),
(2, '50 mi.', 1, '2024-03-17 05:41:49'),
(3, '100 mi.', 1, '2024-03-17 05:41:49'),
(4, '300 mi.', 1, '2024-03-17 05:41:49'),
(5, '500 mi.', 1, '2024-03-17 05:41:49'),
(6, '1000 mi.', 1, '2024-03-17 05:41:49'),
(7, 'Statewide', 1, '2024-03-17 05:41:49'),
(8, 'Nationwide', 1, '2024-03-17 05:41:49'),
(9, 'Anywhere', 1, '2024-03-17 05:41:49');

-- --------------------------------------------------------

--
-- Table structure for table `car_make`
--

CREATE TABLE `car_make` (
  `cm_id` int(11) NOT NULL,
  `cm_name` varchar(255) NOT NULL,
  `cm_status` int(11) NOT NULL DEFAULT 1,
  `cm_created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_make`
--

INSERT INTO `car_make` (`cm_id`, `cm_name`, `cm_status`, `cm_created_on`) VALUES
(1, 'Any Make', 1, '2024-03-17 04:50:00'),
(2, 'Ac', 1, '2024-03-17 04:50:00'),
(3, 'Acura', 1, '2024-03-17 04:50:00'),
(4, 'Alfa Remeo', 1, '2024-03-17 04:50:00'),
(5, 'Allord', 1, '2024-03-17 04:50:00'),
(6, 'AMC', 1, '2024-03-17 04:50:00'),
(7, 'Audi', 1, '2024-03-17 04:50:00'),
(8, 'buick', 1, '2024-03-17 04:50:00'),
(9, 'Eagle', 1, '2024-03-17 04:50:00'),
(10, 'Lotus', 1, '2024-03-17 04:50:00'),
(11, 'RAM', 1, '2024-03-17 04:50:00');

-- --------------------------------------------------------

--
-- Table structure for table `car_model`
--

CREATE TABLE `car_model` (
  `cmo_id` int(11) NOT NULL,
  `cm_id` int(11) NOT NULL,
  `cmo_name` varchar(255) NOT NULL,
  `cmo_status` int(11) NOT NULL DEFAULT 1,
  `cmo_created_on` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_model`
--

INSERT INTO `car_model` (`cmo_id`, `cm_id`, `cmo_name`, `cmo_status`, `cmo_created_on`) VALUES
(1, 1, '289', 1, '2024-03-17 05:05:09'),
(2, 1, '428', 1, '2024-03-17 05:05:09'),
(3, 1, 'Ace', 1, '2024-03-17 05:05:09'),
(4, 1, 'Aceca', 1, '2024-03-17 05:05:09'),
(5, 1, 'Cobra', 1, '2024-03-17 05:05:09'),
(6, 1, 'saloon', 1, '2024-03-17 05:05:09'),
(7, 2, '3.5 RL', 1, '2024-03-17 05:05:09'),
(8, 2, 'CL (ALL)', 1, '2024-03-17 05:05:09'),
(9, 2, '2.2 CL', 1, '2024-03-17 05:05:09'),
(10, 2, '2.3 CL', 1, '2024-03-17 05:05:09'),
(11, 2, '3.0 CL', 1, '2024-03-17 05:05:09'),
(12, 2, '3.2 CL', 1, '2024-03-17 05:05:09');

-- --------------------------------------------------------

--
-- Table structure for table `dealers`
--

CREATE TABLE `dealers` (
  `did` int(11) NOT NULL,
  `dname` varchar(255) NOT NULL,
  `dimg` varchar(255) NOT NULL,
  `dstatus` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fuel_type`
--

CREATE TABLE `fuel_type` (
  `ft_id` int(11) NOT NULL,
  `ft_type` varchar(254) NOT NULL,
  `ft_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fuel_type`
--

INSERT INTO `fuel_type` (`ft_id`, `ft_type`, `ft_status`) VALUES
(1, 'Diesel', 1),
(2, 'Electric', 1),
(3, 'Flax', 1),
(4, 'Gas', 1),
(5, 'Hybrid', 1),
(6, 'Hydrogen', 1),
(7, 'Natural Gas', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `body_style`
--
ALTER TABLE `body_style`
  ADD PRIMARY KEY (`bs_id`);

--
-- Indexes for table `car_detail`
--
ALTER TABLE `car_detail`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `car_distance`
--
ALTER TABLE `car_distance`
  ADD PRIMARY KEY (`cd_id`);

--
-- Indexes for table `car_make`
--
ALTER TABLE `car_make`
  ADD PRIMARY KEY (`cm_id`);

--
-- Indexes for table `car_model`
--
ALTER TABLE `car_model`
  ADD PRIMARY KEY (`cmo_id`);

--
-- Indexes for table `dealers`
--
ALTER TABLE `dealers`
  ADD PRIMARY KEY (`did`);

--
-- Indexes for table `fuel_type`
--
ALTER TABLE `fuel_type`
  ADD PRIMARY KEY (`ft_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `body_style`
--
ALTER TABLE `body_style`
  MODIFY `bs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `car_detail`
--
ALTER TABLE `car_detail`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `car_distance`
--
ALTER TABLE `car_distance`
  MODIFY `cd_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `car_make`
--
ALTER TABLE `car_make`
  MODIFY `cm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `car_model`
--
ALTER TABLE `car_model`
  MODIFY `cmo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dealers`
--
ALTER TABLE `dealers`
  MODIFY `did` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fuel_type`
--
ALTER TABLE `fuel_type`
  MODIFY `ft_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
