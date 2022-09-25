DROP TABLE IF EXISTS `Users`;

CREATE TABLE IF NOT EXISTS `Users` (
    id INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(240) NOT NULL UNIQUE,
    `email` VARCHAR(240) NOT NULL UNIQUE,
    PRIMARY KEY (id))
ENGINE = InnoDB ;

INSERT INTO `Users` VALUES (1, 'Theo', 'theo@gmail.com');
INSERT INTO `Users` VALUES (2, 'Lucie', 'Lucie@gmail.com');
INSERT INTO `Users` VALUES (3, 'Maxime', 'Maxime@gmail.com');
INSERT INTO `Users` VALUES (4, 'Pierre', 'Pierre@gmail.com');
