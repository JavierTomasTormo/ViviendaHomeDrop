-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-04-2024 a las 19:59:46
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `homedropviviendas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoryhomedrop`
--

CREATE TABLE `categoryhomedrop` (
  `ID_Category` int(11) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoryhomedrop`
--

INSERT INTO `categoryhomedrop` (`ID_Category`, `Category`, `Img`) VALUES
(2, 'Garaje', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryGaraje.jpg'),
(3, 'Trastero', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryTrastero.jpg'),
(4, 'Calefacción', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryCalefaccion.jpeg'),
(5, 'Aire Acondicionado', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryAire_Acondicionado.jpg'),
(6, 'Ascensor', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryAscensor.jpg'),
(7, 'Terraza', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryTerraza.jpg'),
(8, 'Piscina', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryPiscina.jpg'),
(9, 'Amueblado', 'ViewParent/IMG/Homes/CategoryCarousel/CategoryAmueblado.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cityhomedrop`
--

CREATE TABLE `cityhomedrop` (
  `ID_City` int(11) NOT NULL,
  `Ciudad` varchar(100) NOT NULL,
  `Img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cityhomedrop`
--

INSERT INTO `cityhomedrop` (`ID_City`, `Ciudad`, `Img`) VALUES
(2, 'Madrid', 'ViewParent/IMG/Homes/CityCarousel/CityMadrid.jpg'),
(3, 'Valencia', 'ViewParent/IMG/Homes/CityCarousel/CityValencia.jpg'),
(7, 'Barcelona', 'ViewParent/IMG/Homes/CityCarousel/CityBarcelona.jpg'),
(9, 'Alicante', 'ViewParent\\IMG\\Homes\\CityCarousel\\CityAlicante.jpg'),
(10, 'San Juan de Alicante', 'ViewParent\\IMG\\Homes\\CityCarousel\\CitySanJuandeAlicante.jpg'),
(11, 'Coimbra', 'ViewParent/IMG/Homes/CityCarousel/CityCoimbra.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exceptionlogs`
--

CREATE TABLE `exceptionlogs` (
  `ID_Exception` int(11) NOT NULL,
  `ID_HomeDrop` int(11) NOT NULL,
  `ErrorType` int(10) NOT NULL,
  `Spots` varchar(100) NOT NULL,
  `Exception_Date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `exceptionlogs`
--

INSERT INTO `exceptionlogs` (`ID_Exception`, `ID_HomeDrop`, `ErrorType`, `Spots`, `Exception_Date`) VALUES
(3, 3, 503, 'Carrusel_Brands HOME', '2022-03-18 23:54:39'),
(5, 5, 503, 'Carrusel_Brands HOME', '2022-03-18 23:54:41'),
(6, 6, 503, 'Carrusel_Brands HOME', '2022-03-18 23:57:46'),
(7, 7, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(8, 8, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(9, 9, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(10, 10, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(11, 7, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:31'),
(12, 22, 503, 'Carrusel_Brands HOME', '2024-03-26 00:00:00'),
(13, 23, 503, 'Carrusel_Brands HOME', '2024-03-26 00:00:00'),
(14, 24, 503, 'Carrusel_Brands HOME', '2024-03-26 00:00:00'),
(15, 25, 503, 'Carrusel_Brands HOME', '2024-03-26 00:00:00'),
(16, 26, 503, 'Carrusel_Brands HOME', '2024-03-26 00:00:00'),
(17, 27, 503, 'Carrusel_Brands HOME', '2024-03-26 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imageneshomedrop`
--

CREATE TABLE `imageneshomedrop` (
  `ID_Imagen` int(11) NOT NULL,
  `ID_HomeDrop` int(11) NOT NULL,
  `Img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imageneshomedrop`
--

INSERT INTO `imageneshomedrop` (`ID_Imagen`, `ID_HomeDrop`, `Img`) VALUES
(1, 2, 'ViewParent\\IMG\\Homes\\Shop\\1.jpg'),
(2, 2, 'views/img/viviendas/vivienda2.2.jpg'),
(3, 3, 'ViewParent\\IMG\\Homes\\Shop\\2.jpg'),
(4, 3, 'ViewParent\\IMG\\Homes\\Shop\\2.2.jpg'),
(5, 4, 'ViewParent\\IMG\\Homes\\Shop\\3.jpg'),
(6, 4, 'views/img/viviendas/vivienda4.2.jpg'),
(7, 5, 'ViewParent\\IMG\\Homes\\Shop\\4.jpg'),
(8, 5, 'views/img/viviendas/vivienda5.2.jpg'),
(9, 6, 'ViewParent\\IMG\\Homes\\Shop\\5.jpg'),
(10, 6, 'views/img/viviendas/vivienda6.2.jpg'),
(11, 7, 'ViewParent\\IMG\\Homes\\Shop\\6.jpg'),
(12, 7, 'views/img/viviendas/vivienda7.2.jpg'),
(13, 8, 'ViewParent\\IMG\\Homes\\Shop\\7.jpg'),
(14, 8, 'views/img/viviendas/vivienda8.2.jpg'),
(15, 9, 'ViewParent\\IMG\\Homes\\Shop\\8.jpg'),
(16, 9, 'views/img/viviendas/vivienda9.2.jpg'),
(17, 10, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(18, 10, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(19, 11, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(20, 12, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(21, 12, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(22, 13, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(23, 13, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(24, 14, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(25, 14, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(26, 15, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(27, 15, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(28, 16, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(29, 16, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(30, 17, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(31, 17, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(32, 18, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(33, 18, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(34, 19, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(35, 19, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(36, 20, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(37, 20, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(38, 21, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(39, 21, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(40, 22, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(41, 23, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(42, 24, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(43, 25, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(44, 26, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg'),
(45, 27, 'ViewParent\\IMG\\Homes\\TypeCarousel\\Stock.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operationhomedrop`
--

CREATE TABLE `operationhomedrop` (
  `ID_Operation` int(11) NOT NULL,
  `Operation` varchar(255) NOT NULL,
  `Img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `operationhomedrop`
--

INSERT INTO `operationhomedrop` (`ID_Operation`, `Operation`, `Img`) VALUES
(2, 'Compra', 'ViewParent\\IMG\\Homes\\OperationHomeDrop\\OperationCompra.jpg'),
(3, 'Alquiler', 'ViewParent\\IMG\\Homes\\OperationHomeDrop\\OperationAlquiler.png'),
(4, 'Opción a Compra', 'ViewParent\\IMG\\Homes\\OperationHomeDrop\\OperationOpcionACompra.jpg'),
(5, 'Compartir', 'ViewParent\\IMG\\Homes\\OperationHomeDrop\\OperationCompartir.jpg'),
(6, 'Obra Nueva', 'ViewParent\\IMG\\Homes\\OperationHomeDrop\\OperationObraNueva.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `typehomedrop`
--

CREATE TABLE `typehomedrop` (
  `ID_Type` int(11) NOT NULL,
  `Img` varchar(255) DEFAULT NULL,
  `Type` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `typehomedrop`
--

INSERT INTO `typehomedrop` (`ID_Type`, `Img`, `Type`) VALUES
(1, 'ViewParent/IMG/Homes/TypeCarousel/EstudioCarousel.jpg', 'Estudio'),
(2, 'ViewParent/IMG/Homes/TypeCarousel/ApartamentoCarousel.jpg', 'Apartamento'),
(3, 'ViewParent/IMG/Homes/TypeCarousel/PisoCarousel.jpg', 'Piso'),
(4, 'ViewParent/IMG/Homes/TypeCarousel/AticoCarousel.jpg', 'Ático'),
(5, 'ViewParent/IMG/Homes/TypeCarousel/BajoCarousel.jpg', 'Bajo'),
(6, 'ViewParent/IMG/Homes/TypeCarousel/BuhardillaCarousel.jpg', 'Buhardilla'),
(7, 'ViewParent/IMG/Homes/TypeCarousel/BajoConJardinCarousel.jpg', 'Bajo con Jardín'),
(8, 'ViewParent/IMG/Homes/TypeCarousel/LoftCarousel.jpg', 'Loft'),
(9, 'ViewParent/IMG/Homes/TypeCarousel/ChaletCarousel.jpg', 'Chalet'),
(10, 'ViewParent/IMG/Homes/TypeCarousel/CasaCarousel.jpg', 'Casa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID_User` int(30) NOT NULL,
  `Username` varchar(25) DEFAULT NULL,
  `Password` varchar(100) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `UserType` varchar(50) DEFAULT NULL,
  `Avatar` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID_User`, `Username`, `Password`, `Email`, `UserType`, `Avatar`) VALUES
(1, 'Hakya', '$2y$12$qjen7QF.pQ4S6CLAR/WzuuuI1uvhSTpnK.lpNnaq0VUsX0EKKRXQi', 'javiertomas2003@gmail.com', 'admin', 'https://robohash.org/bcad65cbb7e72b2c3eb99b8f4a4d41ee'),
(31, 'Carlos29', '$2y$12$DUmul1bagMdxtsqur.jNK.u01rZ.sKC3nBfs58PmUwgBZm.pxV.Wi', 'carlos@gmail.com', 'client', 'https://robohash.org/db1e0a3750e0399df3eeee808187d9b4'),
(38, 'Carla29 ', '$2y$12$ArMAmb7UPHEbzxo9so1BWOSjCzgBhqL0TtgzZJgmmy42q7UuJi4LO', 'carla@gmail.com', 'client', 'https://i.pravatar.cc/400?u=62779a64d5b24b7fd3d5026977b7a87a'),
(39, 'Juan29', '$2y$12$dbwGopIYSRfpSu5qRkF.3uLq1kQUxSMmVbjUBSdJqGjJOr.hhaxfi', 'juan@gmail.com', 'client', 'https://i.pravatar.cc/500?u=7038663cc684aa330956752c7e6fe7d4'),
(40, 'Laura29', '$2y$12$CiyB3LvWYg1PnKRTSH7TTu/y7vNy0HciMjJbzZVYbQhJzUoEsCDIa', 'laura@gmail.com', 'client', 'https://robohash.org/72a4d41eebcad65cbb7e72b2c3eb99b8f4a4d41ee'),
(41, 'David29', '$2y$12$.n2J5w7VxkY3rBRQW0n5uO7LzR/bFZFcWn6NOf5ykZ./.KbVTtX3y', 'david@gmail.com', 'client', 'https://robohash.org/1e0a3750e0399df3eeee808187d9b4db1e0a3750'),
(42, 'Sara29', '$2y$12$pfmOZ/dPbR2SfL/Nsny0BObf3zveCnDE0BtysUj7zHDCVlfs/SW9i', 'sara@gmail.com', 'client', 'https://i.pravatar.cc/400?u=72779a64d5b24b7fd3d5026977b7a88a'),
(43, 'Eduardo29', '$2y$12$5yNF3av/eZjjfthI9o.JHecqTpxn8MpcJ4vZvK7FEnP9O/LedFCHG', 'eduardo@gmail.com', 'client', 'https://i.pravatar.cc/500?u=7038663cc684aa330956752c7e6fe7d5'),
(44, 'Ana29', '$2y$12$AAExDHn1cwFPZDF5bx7DIe3Vv6NTY1fU2ToBhK7jOaz8sqZhxYsHW', 'ana@gmail.com', 'client', 'https://robohash.org/a64d5b24b7fd3d5026977b7a87a64d5b24b7fd3d'),
(45, 'Mario29', '$2y$12$Gf2eV0xl2KyQasWfYJvE3u4FizgekZz7Pf3QUc61H1RWfW8d/3m1q', 'mario@gmail.com', 'client', 'https://robohash.org/686e935deccd8a1e5bd92d90e96e5ff5'),
(46, 'Elena29', '$2y$12$Ye9oR8qjQ5xKXTkGeQsyIeYtGknR3MTCZRylZG6zNZCMJ0LxW14lW', 'elena@gmail.com', 'client', 'https://i.pravatar.cc/400?u=72779a64d5b24b7fd3d5026977b7a88b'),
(47, 'Pablo29', '$2y$12$HTqrgUn5EZ9V8G3Z4xzrAeQ6Apt12zSR1pCP6zNHnCr3XBUUEksJK', 'pablo@gmail.com', 'client', 'https://i.pravatar.cc/500?u=7038663cc684aa330956752c7e6fe7d6'),
(48, 'Lucia29', '$2y$12$gUOKHILU4U.J9WL8qS8bCu3DMuRQOEFZ8.2oXj7vDhZ9szR1vOKPy', 'lucia@gmail.com', 'client', 'https://robohash.org/17d2a25dfcb1fe6e7a4a6d73d9f256fa'),
(49, 'Diego29', '$2y$12$McY.Fm9hSLGXDPWj6g/D9e.k6Jm7k1NCSVMftz5MB6zUNkAdDwU1W', 'diego@gmail.com', 'client', 'https://robohash.org/4306a49aa18a33c4f43e81a52b24a3d7');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viviendascategory`
--

CREATE TABLE `viviendascategory` (
  `ID_Category` int(11) NOT NULL,
  `ID_HomeDrop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viviendascategory`
--

INSERT INTO `viviendascategory` (`ID_Category`, `ID_HomeDrop`) VALUES
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(3, 10),
(5, 11),
(2, 12),
(3, 13),
(4, 14),
(5, 15),
(6, 16),
(7, 17),
(8, 18),
(9, 19),
(3, 20),
(5, 21),
(3, 12),
(4, 13),
(5, 14),
(6, 15),
(7, 16),
(8, 17),
(9, 18),
(3, 19),
(5, 20),
(3, 10),
(4, 11),
(5, 20),
(6, 21),
(2, 22),
(3, 23),
(4, 24),
(5, 25),
(6, 26),
(7, 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viviendashomedrop`
--

CREATE TABLE `viviendashomedrop` (
  `ID_HomeDrop` int(11) NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Calle` varchar(255) NOT NULL,
  `Superficie` int(11) NOT NULL,
  `ID_City` int(11) NOT NULL,
  `Fecha_Pub` date DEFAULT NULL,
  `lon` decimal(10,8) DEFAULT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `vivistas` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viviendashomedrop`
--

INSERT INTO `viviendashomedrop` (`ID_HomeDrop`, `Precio`, `Calle`, `Superficie`, `ID_City`, `Fecha_Pub`, `lon`, `lat`, `vivistas`) VALUES
(2, 120500.00, 'Nombre de la Calle 1', 150, 2, '2022-01-01', -3.65258032, 40.41878752, 19),
(3, 95005.00, 'Nombre de la Calle 2', 120, 2, '2022-01-02', -3.64752145, 40.49223018, 8),
(4, 85800.00, 'Nombre de la Calle 3', 100, 3, '2022-01-03', -0.36798473, 39.48518580, 28),
(5, 135050.00, 'Nombre de la Calle 4', 180, 7, '2022-01-04', 2.22488321, 41.39665864, 71),
(6, 110030.00, 'Nombre de la Calle 5', 140, 9, '2022-01-05', -0.47765642, 38.42724200, 10),
(7, 75009.00, 'Nombre de la Calle 6', 90, 10, '2022-01-06', -0.52902076, 38.45017021, 12),
(8, 95000.00, 'Nombre de la Calle 7', 110, 2, '2022-01-07', -3.63048668, 40.41905599, 6),
(9, 98060.00, 'Nombre de la Calle 8', 125, 3, '2022-01-08', -0.28496001, 39.51983198, 12),
(10, 115070.00, 'Nombre de la Calle 9', 135, 7, '2022-01-09', 2.24903995, 41.41350378, 2),
(11, 105000.00, 'Nombre de la Calle 10', 130, 10, '2022-01-10', -0.51410092, 38.48568405, 1),
(12, 125000.00, 'Nombre de la Calle 11', 160, 2, '2024-03-06', -3.69767696, 40.47656302, 1),
(13, 85000.00, 'Nombre de la Calle 12', 110, 3, '2024-03-06', -0.29585400, 39.49284094, 0),
(14, 95000.00, 'Nombre de la Calle 13', 130, 7, '2024-03-06', 2.24676671, 41.48311073, 1),
(15, 140000.00, 'Nombre de la Calle 14', 180, 9, '2024-03-06', -0.41104648, 38.40093542, 14),
(16, 80000.00, 'Nombre de la Calle 15', 100, 10, '2024-03-06', -0.46038344, 38.47227652, 1),
(17, 92000.00, 'Nombre de la Calle 16', 115, 2, '2024-03-06', -3.62586705, 40.47583518, 12),
(18, 110000.00, 'Nombre de la Calle 17', 140, 3, '2024-03-06', -0.31492295, 39.49967970, 1),
(19, 128000.00, 'Nombre de la Calle 18', 155, 7, '2024-03-06', 2.23816737, 41.41959773, 29),
(20, 75000.00, 'Nombre de la Calle 19', 95, 9, '2024-03-06', -0.40281345, 38.43263959, 2),
(21, 105000.00, 'Nombre de la Calle 20', 120, 10, '2024-03-06', -0.52656173, 38.44627261, 1),
(22, 100000.00, 'Nombre de la Calle 21', 130, 11, '2024-03-06', -8.42083300, 40.21149100, 6),
(23, 90000.00, 'Nombre de la Calle 22', 110, 11, '2024-03-06', -8.41614100, 40.20331400, 3),
(24, 110000.00, 'Nombre de la Calle 23', 140, 11, '2024-03-06', -8.40566100, 40.21192100, 1),
(25, 95000.00, 'Nombre de la Calle 24', 120, 11, '2024-03-06', -8.41489300, 40.20915700, 2),
(26, 105000.00, 'Nombre de la Calle 25', 125, 11, '2024-03-06', -8.41754800, 40.20756400, 1),
(27, 85000.00, 'Nombre de la Calle 26', 115, 11, '2024-03-06', -8.42183600, 40.21464700, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viviendasoperation`
--

CREATE TABLE `viviendasoperation` (
  `ID_Operation` int(11) NOT NULL,
  `ID_HomeDrop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viviendasoperation`
--

INSERT INTO `viviendasoperation` (`ID_Operation`, `ID_HomeDrop`) VALUES
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(2, 7),
(3, 8),
(4, 9),
(5, 10),
(6, 11),
(2, 12),
(3, 13),
(4, 14),
(5, 15),
(6, 16),
(2, 17),
(3, 18),
(4, 19),
(5, 20),
(6, 21),
(2, 22),
(3, 23),
(4, 24),
(5, 25),
(6, 26),
(2, 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viviendastype`
--

CREATE TABLE `viviendastype` (
  `ID_Type` int(11) NOT NULL,
  `ID_HomeDrop` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viviendastype`
--

INSERT INTO `viviendastype` (`ID_Type`, `ID_HomeDrop`) VALUES
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(1, 11),
(2, 12),
(3, 13),
(4, 14),
(5, 15),
(6, 16),
(7, 17),
(8, 18),
(9, 19),
(10, 20),
(1, 21),
(2, 22),
(3, 23),
(4, 24),
(5, 25),
(6, 26),
(7, 27);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoryhomedrop`
--
ALTER TABLE `categoryhomedrop`
  ADD PRIMARY KEY (`ID_Category`);

--
-- Indices de la tabla `cityhomedrop`
--
ALTER TABLE `cityhomedrop`
  ADD PRIMARY KEY (`ID_City`);

--
-- Indices de la tabla `exceptionlogs`
--
ALTER TABLE `exceptionlogs`
  ADD PRIMARY KEY (`ID_Exception`),
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`);

--
-- Indices de la tabla `imageneshomedrop`
--
ALTER TABLE `imageneshomedrop`
  ADD PRIMARY KEY (`ID_Imagen`);

--
-- Indices de la tabla `operationhomedrop`
--
ALTER TABLE `operationhomedrop`
  ADD PRIMARY KEY (`ID_Operation`);

--
-- Indices de la tabla `typehomedrop`
--
ALTER TABLE `typehomedrop`
  ADD PRIMARY KEY (`ID_Type`),
  ADD UNIQUE KEY `ID_Type` (`ID_Type`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID_User`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `Email` (`Email`);

--
-- Indices de la tabla `viviendascategory`
--
ALTER TABLE `viviendascategory`
  ADD KEY `ID_Category` (`ID_Category`) USING BTREE,
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`);

--
-- Indices de la tabla `viviendashomedrop`
--
ALTER TABLE `viviendashomedrop`
  ADD PRIMARY KEY (`ID_HomeDrop`),
  ADD KEY `ID_City` (`ID_City`);

--
-- Indices de la tabla `viviendasoperation`
--
ALTER TABLE `viviendasoperation`
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`) USING BTREE,
  ADD KEY `ID_Operation` (`ID_Operation`) USING BTREE;

--
-- Indices de la tabla `viviendastype`
--
ALTER TABLE `viviendastype`
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`),
  ADD KEY `ID_Type` (`ID_Type`) USING BTREE,
  ADD KEY `ID_HomeDrop_2` (`ID_HomeDrop`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoryhomedrop`
--
ALTER TABLE `categoryhomedrop`
  MODIFY `ID_Category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `cityhomedrop`
--
ALTER TABLE `cityhomedrop`
  MODIFY `ID_City` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `exceptionlogs`
--
ALTER TABLE `exceptionlogs`
  MODIFY `ID_Exception` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `imageneshomedrop`
--
ALTER TABLE `imageneshomedrop`
  MODIFY `ID_Imagen` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `operationhomedrop`
--
ALTER TABLE `operationhomedrop`
  MODIFY `ID_Operation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID_User` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `viviendashomedrop`
--
ALTER TABLE `viviendashomedrop`
  MODIFY `ID_HomeDrop` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `exceptionlogs`
--
ALTER TABLE `exceptionlogs`
  ADD CONSTRAINT `fk_home_drop` FOREIGN KEY (`ID_HomeDrop`) REFERENCES `viviendashomedrop` (`ID_HomeDrop`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
