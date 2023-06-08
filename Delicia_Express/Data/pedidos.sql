SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE DATABASE `base_de_datos`;
CREATE TABLE `pedidos` (
  `ID` int(11) NOT NULL,
  `Nro. Orden` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Importe` DECIMAL(7,2) NOT NULL,
  `Tipo de pago` char(25) NOT NULL,
  `Estado` char(25) NOT NULL DEFAULT 'A confirmar'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
INSERT INTO `pedidos` (`ID`, `Nro. Orden`, `Fecha`,`Importe`,`Tipo de pago`,`Estado`) VALUES
(47, 000340, '2023-05-21',1890.00,'tarjeta','En cocina'),
(48, 000341, '2023-05-21',2225.00,'transferencia','Listo');
ALTER TABLE `pedidos`
ADD PRIMARY KEY (`ID`);
ALTER TABLE `pedidos`
MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;
