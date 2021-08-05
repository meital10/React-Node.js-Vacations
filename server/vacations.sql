------------------------------------------------users table---------------------------------------------
-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2020 at 01:14 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacation_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(256) NOT NULL,
  `is_admin` tinyint(4) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `username`, `password`, `is_admin`) VALUES
(2, 'meital', 'aharoni', 'admin', 'f4b831e7641dfd7d962626d9a7c29a00a7c9a76486445c6c368cc9084d361b49', 1),
(3, 'meital', 'aharoni', 'user', 'ade805e7d9e77301f8c863b0c5b76f9b72d11fafda1463ea6662e589fda691e0', 0),
(4, 'meital', 'aharoni', 'user8', 'e4f479b48c3bf04850184cf4142a526a1fba6d2242f63898db188771e1baf807', 0),
(5, 'meital', 'aha', 'user6', '35b4df7697c23789fd1a6cdf91111de2823a1575011d701a339abac260ca0fdb', 0),
(6, 'meital', 'aharoni', 'user5', '7b622fb66a2d8ce92436ef6592821b1ffa81cc60e42cb09135f5627d74237e58', 0),
(7, 'meital', 'aharoni', 'user2', '5806e1c7e898c2405937d04a68cb0111d96643b3b1c4733ed531eb0f600fa44c', 0),
(8, 'meital', 'aha', 'user3', 'ead326f316bd8d59b497ad8ffa7c42ab5346b46f7af37c4fd28b5701949ab3e9', 0),
(9, 'meital', 'aharoni', 'user4', '5eb6817a96373d156d93b025aa804365ff1172627be592f517bd4b7669378de4', 0),
(10, 'meital', 'aharoni', 'user7', 'a9bc675d23d07a978e20df50ee4730f226d9a02e8150a47500db89d335db8f70', 0),
(11, 'meital', 'aharoni', 'user9', '33c6a589d4bb740e2c77f7d1e7765de3810e8a5df166a7ba668e8fc95f5d9712', 0),
(12, 'meital', 'aharoni', 'user10', '597cc613e3118972c819159b6b9c31704431a0767f66e5b83c36e7407e59b979', 0),
(15, 'meital', 'aharoni', 'user11', '6656c8f9ac44284e983ccc3fe7e6b2179c8260e0740ca4f07ca2307decca3b2d', 0),
(19, 'meital', 'aharoni', 'user12', '321a7524e6364301f1cfe16dbe88986c9a5f5398d091d243261310b245fe3698', 0),
(23, '', '', 'user13', 'fbd22e8db5e56ea9b0a33deaca5db3c3b54b1b4d1b20e95f8b50e87a68f8331b', 0),
(24, '', '', 'user14', '2e3f110ab79ed60315036a4bb8b898d65e59bd86e6892873a75bcc93aa7f4579', 0),
(25, 'meital', 'aharoni', 'user15', '26f069e822d92edd7a15aa7aba0155f22bf6eaa008f0393601d8042db645c764', 0),
(26, 'meital', 'aharonim', 'user16', '9da13b006b1fb03043fb83b39fdd915760512a177413f427e03def19ae133a94', 0),
(27, 'meital', 'aharoni', 'user17', 'dcf02845156f99e419644b9eb719becdb25a8792a59ca68640e28f0859d6c40a', 0),
(28, 'meital', 'aharoni', 'user18', '739800d4e32dbf9ac0f3a4e9ffdeca5089fac85e0bbca86fa253b1daf80b7576', 0),
(29, 'meital', 'aharoni', 'user19', '6cbbff125250870044a4221dde7e5c7a2d0cd431c0e1c9d894cbf76c5088a325', 0),
(30, 'yardena', 'aharoni', 'user20', '73cbc75c67e68b1b67e9dda58bf68db29b0a344c4cbddfa2e9bfc64523659c31', 0),
(31, 'meital', 'aharoni', 'user21', 'eb152e1458bc85d52dd321a8a56e1564095b2da1bcc1e35466d3f42c7db3fbb7', 0),
(32, 'meital', 'aharoni', 'user22', '0224f91eda9ab8e268526cb0589dae21eb2a4fad028bb424947a5f21ffcdd61b', 0),
(33, 'meital', 'aharoni', 'user23', 'c921afae9a06863c5b8af606f2e951aa07da4ebc05dc4be48c1928bd5aaee24f', 0),
(34, 'meital', 'aharoni', 'user24', '4cb58736a2257dc5c7cb4e1a6415a7868b58747576cdb93887de240df758b8ac', 0),
(35, 'meital', 'aharoni', 'user26', '31a09c06be839ed85ed916c763ae60d4be0d9b3bdbe2615d466920e4e03a026c', 0),
(36, 'meital', 'aharoni', 'user25', '2bfcc4947cb81e1d1d0f8a38fa3ea69f07b860f061ddb747f257e50f7575b2a9', 0),
(37, 'meital', 'aharoni', 'user27', 'cde4d7e8b8c8f3b641b5cb124b627c9e91907db07f64e20e326842661100ee2e', 0),
(38, 'meital', 'aharoni', 'user28', '4474be41c2ef27989423e15f089195455dd3128229c16b3ffe020f1f9b0bef58', 0),
(39, 'meital', 'aharoni', 'user29', 'b5e5437d976f0b75928a7d91e833aacac779021c80fbbbf6ef9cfcdf7d703ac3', 0),
(40, 'meital', 'aharoni', 'user30', '46d948cee7e39a76155d9370d20f8edb66e7b22b4a7c4f9dcac06e6bda3e1fba', 0),
(41, 'meital', 'aharoni', 'user31', 'd03921c24db525074ae07ccf91cb1bcb0f5b1bd2568b1a7d02417100087f151a', 0),
(42, 'meital', 'aharoni', 'user32', 'bfafc16d1ee4f71207769b99966410c1c76f1f8f17efc5655e0868b3753d665b', 0),
(43, 'meital', 'aharoni', 'user33', 'b1ab50aea4ca63855a38d23d4e6f13fdec76beccc06cdd9a4655f7fc3e53dc46', 0),
(44, 'meital', 'aharoni', 'user35', 'da487d0196d3af16ba5885cc4232c2cb99cd6f5aade458bf60c364459b44266a', 0),
(45, 'meital', 'aharoni', 'user36', '26b3a17592f557d48c8788f0354367f634fe7ddccaccfac0db3182a0d6048278', 0),
(46, 'meital', 'ahaharoni', 'user37', '4a75a2ed577a770d76f318c82e16557bcff8f0556489e14a8f90d8730cbfede6', 0),
(47, 'meital', 'aharoni', 'user38', '494fc692a17dd962ef279f5fdc4707cb3bbe44d8d4cd1fe40fd7fa0b4b321be9', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- --------------------------------vacations table-----------------------------------------------------


CREATE TABLE `vacations` (
  `vacation_id` int(11) NOT NULL,
  `description` varchar(300) NOT NULL,
  `destination` varchar(300) NOT NULL,
  `img_url` varchar(300) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`vacation_id`, `description`, `destination`, `img_url`, `from_date`, `to_date`, `price`) VALUES
(1, 'Mexico is a land of extremes, with high mountains and deep canyons in the center of the country, sweeping deserts in the north, and dense rain forests in the south and east.', 'MEXICO', 'https://www.momoafrica.com/wp-content/uploads/2019/09/liberia.2.jpg', '2020-10-07', '2020-10-26', 1300),
(3, 'Vanice is one of the most beatiful spots in Italy. why? It is small and compact, perfect to be, explore with just a few days time. Vanice is romantic, historic and gorgeuse. The canals, the gondolas, the architecture. what is not to love?', 'VANICE ITALY', 'https://foundtheworld.com/wp-content/uploads/2014/07/Venice-Italy-9.jpg', '2020-10-22', '2020-10-29', 800),
(5, 'Madrid is much more than just its downtown and its most recognisable landmarks. The city is composed of 21 districts filled with monuments, parks and many other sites just waiting to be discovered.', 'MADRID', 'https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/2:1/w_5122,h_2561,c_limit/madrid-travel-guide.jpg', '2020-11-18', '2020-11-30', 800),
(6, 'Hospitality is at the heart of the city of New Orleans. Together, over the years, weג€™ve opened our arms to our visitors across the city from our dining rooms to our music halls and everywhere in between.', 'NEW ORLEANS', 'https://i.insider.com/58af3d54fbaed518028b4af6?width=1100&format=jpeg&auto=webp', '2020-11-01', '2020-11-29', 1300),
(9, 'Here, visitors enjoy lovely tropical beaches, grand adventures, the wonders of nature and scintillating culture - all the necessary components of an ideal vacation or holiday. No wonder thousands have made Costa Rica their top travel choice!', 'COSTA RICA', 'https://lp-cms-production.imgix.net/features/2019/02/Schloss-Vaduz2-ab442dfc24df.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850', '2020-11-05', '2020-11-23', 1300),
(10, 'From beaches and mountains to wildlife-rich national parks, energetic cities, and cute towns, Thailand offers something for everyone. come visit the spacial culture, amazing beaches, great food and good people.', 'THAILAND', 'https://lp-cms-production.imgix.net/2020-08/shutterstockRF_1532991359.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850', '2020-11-14', '2020-11-21', 1200),
(11, 'Beautiful countryside, a cosmopolitan resort, historic sights as well as sporting activities, the Pafos Region has something for everyone at any time of the year.  Whether you are a sunseeker, an explorer or someone looking for relaxing holiday with great scenery, there are so many reasons to visit ', 'PAPHUS CYPROS', 'https://goingluxury.com/wp-content/uploads/2019/04/20957694.jpg', '2020-11-26', '2020-12-01', 700),
(12, 'Whether you are a history buff or not, Greece is home to marvellous monuments and UNESCO heritage sites. Take the time to see the beautiful Acropolis in Athens and its stunning museum, visit the archaeological site of Delphi or the open-air island museum of Delos, the stunning Byzantine monuments of', 'GREECE', 'https://destsettersns.akamaized.net/blog/articles/HFJrDrzvW5.jpg', '2020-11-17', '2020-12-01', 500),
(13, 'Amsterdam is one of the greatest small cities in the world. From Amsterdam canals to world-famous Amsterdam museums and historical Amsterdam sights, it is one of the most romantic and beautiful cities in Europe. ', 'AMSTERDAM', 'https://media.timeout.com/images/105657445/image.jpg', '2020-11-16', '2020-11-30', 500),
(14, 'Across New Zealand, you can find everything from untamed wilderness to rich culture. Find inspiration in towering mountains and mist-cloaked fjords. Serenity in golden beaches curled around quiet bays.', 'NEW ZELAND', 'https://lh3.googleusercontent.com/proxy/q-AGR6Y91EXQapCHCm6eotyKlXdaNw_eHqlQSWfXTEt-RKIcR4qvO2_ewcqa12QGDo3vUu81vqsLqkwf8BQbL5Mmuls6AxCsA9WVW5qPM9QpawSmfDw', '2020-11-10', '2020-12-01', 1500);
(15, 'North Africaג€™s Morocco is a popular destination, attracting culture lovers, backpackers, adventure travelers, couples, families, foodies, and more. Here are the ultimate reasons why Morocco is a great place for everyone.', 'MAROCCO', 'https://media-cdn.tripadvisor.com/media/photo-s/0e/5f/9c/ff/tour-marocco.jpg', '2020-11-13', '2020-11-27', 1500);

--------------------------------------------vacations followers--------------------------------------

-- Table structure for table `vacation_followers`
--

CREATE TABLE `vacation_followers` (
  `followers_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vacation_followers`
--

INSERT INTO `vacation_followers` (`followers_id`, `vacation_id`, `user_id`) VALUES
(10, 1, 7),
(30, 1, 9),
(56, 1, 29),
(39, 1, 42),
(37, 2, 5),
(40, 2, 43),
(55, 3, 3),
(62, 3, 28),
(59, 3, 29),
(38, 3, 34),
(25, 4, 3),
(26, 4, 9),
(48, 5, 26),
(58, 5, 29),
(35, 6, 3),
(43, 6, 9),
(63, 6, 28),
(69, 6, 47),
(34, 8, 3),
(36, 8, 5),
(53, 9, 3),
(65, 9, 27),
(44, 9, 32),
(41, 9, 43),
(70, 9, 47),
(54, 10, 3),
(51, 10, 19),
(64, 10, 27),
(60, 10, 28),
(50, 11, 19),
(49, 11, 26),
(61, 11, 28),
(52, 12, 19),
(47, 12, 26),
(57, 12, 29),
(67, 12, 47),
(46, 13, 32),
(42, 14, 9),
(66, 14, 27),
(45, 14, 32),
(68, 14, 47);





