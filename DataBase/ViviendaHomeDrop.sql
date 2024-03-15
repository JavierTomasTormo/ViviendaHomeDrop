-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2022 a las 18:41:13
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `HomeDropViviendas`
--

--
-- Estructura de tabla para la tabla `ViviendasHomeDrop`
--

CREATE TABLE `ViviendasHomeDrop` (
  `ID_HomeDrop` INT NOT NULL,
  `Precio` DECIMAL(10, 2) NOT NULL,
  `Superficie` INT NOT NULL,
  `ID_City` INT NOT NULL,
  `Fecha_Pub` DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcado de datos para la tabla `ViviendasHomeDrop`
INSERT INTO `ViviendasHomeDrop` (`ID_HomeDrop`, `Precio`, `Superficie`, `ID_City`, `Fecha_Pub`) VALUES
(2, 120000.00, 150, 1, '2022-01-01'),
(3, 95000.00, 120, 2, '2022-01-02'),
(4, 80000.00, 100, 3, '2022-01-03'),
(5, 135000.00, 180, 4, '2022-01-04'),
(6, 110000.00, 140, 5, '2022-01-05'),
(7, 75000.00, 90, 6, '2022-01-06'),
(8, 90000.00, 110, 7, '2022-01-07'),
(9, 98000.00, 125, 8, '2022-01-08'),
(10, 115000.00, 135, 9, '2022-01-09'),
(11, 105000.00, 130, 10, '2022-01-10');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CityHomeDrop`
--

CREATE TABLE `CityHomeDrop` (
  `ID_City` INT NOT NULL,
  `Ciudad` varchar(100) NOT NULL,
  `Calle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `CityHomeDrop`
--

INSERT INTO `CityHomeDrop` (`ID_City`, `Ciudad`, `Calle`) VALUES
(2, 'Madrid', 'Nombre de la Calle 1'),
(3, 'Valencia', 'Nombre de la Calle 2'),
(4, 'Malaga', 'Nombre de la Calle 3'),
(5, 'Madrid', 'Nombre de la Calle 4'),
(6, 'Madrid', 'Nombre de la Calle 5'),
(7, 'Barcelona', 'Nombre de la Calle 6'),
(8, 'Valencia', 'Nombre de la Calle 7'),
(9, 'Alicante', 'Nombre de la Calle 8'),
(10, 'San Juan', 'Nombre de la Calle 9'),
(11, 'Fabraquer', 'Nombre de la Calle 10');


--
-- Estructura de tabla para la tabla `ImagenesHomeDrop`
--

CREATE TABLE `ImagenesHomeDrop` (
  `ID_Imagen` INT NOT NULL,
  `ID_HomeDrop` INT NOT NULL,
  `Img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ImagenesHomeDrop`
--

INSERT INTO `ImagenesHomeDrop` (`ID_Imagen`, `ID_HomeDrop`, `Img`) VALUES
(1, 2, 'views/img/viviendas/vivienda2.1.jpg'),
(2, 2, 'views/img/viviendas/vivienda2.2.jpg'),
(3, 3, 'views/img/viviendas/vivienda3.1.jpg'),
(4, 3, 'views/img/viviendas/vivienda3.2.jpg'),
(5, 4, 'views/img/viviendas/vivienda4.1.jpg'),
(6, 4, 'views/img/viviendas/vivienda4.2.jpg'),
(7, 5, 'views/img/viviendas/vivienda5.1.jpg'),
(8, 5, 'views/img/viviendas/vivienda5.2.jpg'),
(9, 6, 'views/img/viviendas/vivienda6.1.jpg'),
(10, 6, 'views/img/viviendas/vivienda6.2.jpg'),
(11, 7, 'views/img/viviendas/vivienda7.1.jpg'),
(12, 7, 'views/img/viviendas/vivienda7.2.jpg'),
(13, 8, 'views/img/viviendas/vivienda8.1.jpg'),
(14, 8, 'views/img/viviendas/vivienda8.2.jpg'),
(15, 9, 'views/img/viviendas/vivienda9.1.jpg'),
(16, 9, 'views/img/viviendas/vivienda9.2.jpg'),
(17, 10, 'views/img/viviendas/vivienda10.1.jpg'),
(18, 10, 'views/img/viviendas/vivienda10.2.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ExceptionLogs`
--

CREATE TABLE `ExceptionLogs` (
  `ID_Exception` INT NOT NULL,
  `ID_HomeDrop` INT NOT NULL,
  `ErrorType` int(10) NOT NULL,
  `Spots` varchar(100) NOT NULL,
  `Exception_Date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ExceptionLogs`
--

INSERT INTO `ExceptionLogs` (`ID_Exception`, `ID_HomeDrop`, `ErrorType`, `Spots`, `Exception_Date`) VALUES
(2, 2, 503, 'Carrusel_Brands HOME', '2022-03-18 23:54:35'),
(3, 3, 503, 'Carrusel_Brands HOME', '2022-03-18 23:54:39'),
(4, 4, 503, 'Carrusel_Brands HOME', '2022-03-18 23:54:40'),
(5, 5, 503, 'Carrusel_Brands HOME', '2022-03-18 23:54:41'),
(6, 6, 503, 'Carrusel_Brands HOME', '2022-03-18 23:57:46'),
(7, 7, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(8, 8, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(9, 9, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(10, 10, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:16'),
(11, 7, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:31'),
(4, 4, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:31'),
(2, 2, 503, 'Function load_like_user SHOP', '2022-04-01 11:37:31');


--
-- Estructura de tabla para la tabla `ViviendasType`
--

CREATE TABLE `ViviendasType` (
  `ID_Type` INT NOT NULL,
  `ID_HomeDrop` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ViviendasType`
--

INSERT INTO `ViviendasType` (`ID_Type`, `ID_HomeDrop`) VALUES
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `TypeHomeDrop`
--

CREATE TABLE `TypeHomeDrop` (
  `ID_Type` INT NOT NULL,
  `Type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `TypeHomeDrop`
--

INSERT INTO `TypeHomeDrop` (`ID_Type`, `Type`) VALUES
(2, 'Estudio'),
(3, 'Apartamento'),
(4, 'Piso'),
(5, 'Ático'),
(6, 'Bajo'),
(7, 'Buhardilla'),
(8, 'Bajo con Jardín'),
(9, 'Loft'),
(10, 'Chalet'),
(11, 'Casa');
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `ViviendasOperation`
--

CREATE TABLE `ViviendasOperation` (
  `ID_Operation` INT NOT NULL,
  `ID_HomeDrop` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ViviendasOperation`
--
INSERT INTO `ViviendasOperation` (`ID_Operation`, `ID_HomeDrop`) VALUES
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `OperationHomeDrop`
--

CREATE TABLE `OperationHomeDrop` (
  `ID_Operation` INT NOT NULL,
  `Operation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `OperationHomeDrop`
--
INSERT INTO `OperationHomeDrop` (`ID_Operation`, `Operation`) VALUES
(2, 'Compra'),
(3, 'Alquiler'),
(4, 'Opción a Compra'),
(5, 'Compartir'),
(6, 'Obra Nueva'),
(7, 'Opción a Compra'),
(8, 'Compartir'),
(9, 'Compra'),
(10, 'Obra Nueva'), 
(11, 'Alquiler');


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ViviendasCategory`
--

CREATE TABLE `ViviendasCategory` (
  `ID_Category` INT NOT NULL,
  `ID_HomeDrop` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ViviendasCategory`
--
INSERT INTO `ViviendasCategory` (`ID_Category`, `ID_HomeDrop`) VALUES
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11);

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `CategoryHomeDrop`
--

CREATE TABLE `CategoryHomeDrop` (
  `ID_Category` INT NOT NULL,
  `Categoría` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `CategoryHomeDrop`
--

INSERT INTO `CategoryHomeDrop` (`ID_Category`, `Categoría`) VALUES
(2, 'Garaje'),
(3, 'Trastero'),
(4, 'Calefacción'),
(5, 'Aire_Acondicionado'),
(6, 'Ascensor'),
(7, 'Terraza'),
(8, 'Piscina'),
(9, 'Amueblado'),
(10, 'Amueblado:Ascensor'),
(11, 'Piscina:Aire_Acondicionado:Terraza');

-- --------------------------------------------------------



--
-- Índices para tablas volcadas
--
-- Indices de la tabla `ViviendasHomeDrop`
ALTER TABLE `ViviendasHomeDrop`
  ADD PRIMARY KEY (`ID_HomeDrop`),
  ADD KEY `ID_City` (`ID_City`);

ALTER TABLE `ViviendasHomeDrop`
  MODIFY `ID_HomeDrop` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;



------------------------------------------


-- Indices de la tabla `CityHomeDrop`
ALTER TABLE `CityHomeDrop`
  ADD PRIMARY KEY (`ID_City`);

ALTER TABLE `CityHomeDrop`
  MODIFY `ID_City` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;




------------------------------------------
--
-- Indices de la tabla `ImagenesHomeDrop`
--
ALTER TABLE `ImagenesHomeDrop`
  ADD PRIMARY KEY (`ID_Imagen`);

ALTER TABLE `ImagenesHomeDrop`
  MODIFY `ID_Imagen` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
------------------------------------------
--
-- Indices de la tabla `ExceptionLogs`
--
ALTER TABLE `ExceptionLogs`
  ADD PRIMARY KEY (`ID_Exception`),
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`);

ALTER TABLE `ExceptionLogs`
  MODIFY `ID_Exception` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;


ALTER TABLE `ExceptionLogs`
    ADD CONSTRAINT `fk_home_drop`
    FOREIGN KEY (`ID_HomeDrop`) REFERENCES `ViviendasHomeDrop`(`ID_HomeDrop`);
------------------------------------------
--
-- Indices de la tabla `ViviendasType`
--
ALTER TABLE `ViviendasType`
  ADD PRIMARY KEY (`ID_Type`) USING BTREE,
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`);

ALTER TABLE `ViviendasType`
    ADD CONSTRAINT `fk_type_home_drop`
    FOREIGN KEY (`ID_Type`) REFERENCES `TypeHomeDrop`(`ID_Type`),
    ADD CONSTRAINT `fk_typehomedrop`
    FOREIGN KEY (`ID_HomeDrop`) REFERENCES `ViviendasHomeDrop`(`ID_HomeDrop`);

------------------------------------------
--
-- Indices de la tabla `TypeHomeDrop`
--
ALTER TABLE `TypeHomeDrop`
  ADD PRIMARY KEY (`ID_Type`);

ALTER TABLE `TypeHomeDrop`
  MODIFY `ID_Type` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
------------------------------------------
--
-- Indices de la tabla `ViviendasOperation`
--
ALTER TABLE `ViviendasOperation`
  ADD PRIMARY KEY (`ID_Operation`) USING BTREE,
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`);

ALTER TABLE `ViviendasOperation`
    ADD CONSTRAINT `fk_operation_home_drop`
    FOREIGN KEY (`ID_Operation`) REFERENCES `OperationHomeDrop`(`ID_Operation`),
    ADD CONSTRAINT `fk_operationhomedrop`
    FOREIGN KEY (`ID_HomeDrop`) REFERENCES `ViviendasHomeDrop`(`ID_HomeDrop`);
------------------------------------------
--
-- Indices de la tabla `OperationHomeDrop`
--
ALTER TABLE `OperationHomeDrop`
  ADD PRIMARY KEY (`ID_Operation`);

ALTER TABLE `OperationHomeDrop`
  MODIFY `ID_Operation` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
------------------------------------------
--
-- Indices de la tabla `ViviendasCategory`
--
ALTER TABLE `ViviendasCategory`
  ADD PRIMARY KEY (`ID_Category`) USING BTREE,
  ADD KEY `ID_HomeDrop` (`ID_HomeDrop`);

ALTER TABLE `ViviendasCategory`
    ADD CONSTRAINT `fk_category_home_drop`
    FOREIGN KEY (`ID_Category`) REFERENCES `CategoryHomeDrop`(`ID_Category`),
    ADD CONSTRAINT `fk_categoryhomedrop`
    FOREIGN KEY (`ID_HomeDrop`) REFERENCES `ViviendasHomeDrop`(`ID_HomeDrop`);
------------------------------------------
--
-- Indices de la tabla `CategoryHomeDrop`
--
ALTER TABLE `CategoryHomeDrop`
  ADD PRIMARY KEY (`ID_Category`);

ALTER TABLE `CategoryHomeDrop`
  MODIFY `ID_Category` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
------------------------------------------
ALTER TABLE `ViviendasHomeDrop`
    ADD CONSTRAINT `fk_city`
    FOREIGN KEY (`ID_City`) REFERENCES `CityHomeDrop`(`ID_City`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
