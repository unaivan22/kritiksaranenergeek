-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 14, 2025 at 10:18 AM
-- Server version: 10.11.11-MariaDB-cll-lve
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eneg1777_kritik_saran_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `kritik_saran`
--

CREATE TABLE `kritik_saran` (
  `id` int(11) NOT NULL,
  `recipient` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `kritik_saran`
--

INSERT INTO `kritik_saran` (`id`, `recipient`, `message`, `created_at`) VALUES
(1, 'asdasd', 'asdasdada', '2025-02-25 10:26:24'),
(2, 'oke', 'okeee', '2025-02-25 10:32:59'),
(3, 'dasdasd', 'dasdasdasdasd', '2025-02-25 10:45:15'),
(4, 'asdasda', 'dasdasdad', '2025-02-25 10:45:20'),
(5, 'sadasdada', 'dasdasdasd', '2025-02-25 10:45:24'),
(6, 'sdasdada', 'asdasdadasd', '2025-02-25 10:45:28'),
(7, 'admin', 'What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '2025-02-25 10:47:10'),
(8, 'una', 'Where can I get some?\nThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use ', '2025-02-25 10:50:33'),
(9, 'semua', 'semoga sehat selalu', '2025-02-25 11:00:13'),
(10, 'semua', 'aaammiiinn', '2025-02-25 11:00:50'),
(11, 'Spesialis Makanan', 'Tolong disortir ulang terkait makanan, tak semua orang selera sama. Contohnya soto banjar, saya tidak suka sementara temen lain suka. Jadi tolong kasih makanan yang disukai semua pihak', '2025-02-25 11:24:40'),
(12, 'Lead/Manager', 'Kalau rapat jangan mepet jam 4, soalnya sering tembus jam 4 selesainya. Datang telat didenda, pulang telat nggak masuk lemburan. Terlebih jam 4 bisa mengacaukan jadwal kereta/bis bagi yang naik transum. Saran : diplaning ttg jam rapatnya', '2025-02-25 14:30:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kritik_saran`
--
ALTER TABLE `kritik_saran`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kritik_saran`
--
ALTER TABLE `kritik_saran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
