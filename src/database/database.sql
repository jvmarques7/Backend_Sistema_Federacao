-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.6.3-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Copiando estrutura para tabela sistema-fgb.atuacao
CREATE TABLE IF NOT EXISTS `atuacao` (
  `id` int(11) NOT NULL,
  `atuacao` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.atuacao: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `atuacao` DISABLE KEYS */;
INSERT INTO `atuacao` (`id`, `atuacao`, `created_at`, `updated_at`) VALUES
	(1, 'Jogador', '2021-09-22 16:35:28.301963', '2021-09-22 16:35:28.301963'),
	(2, 'Arbitro', '2021-09-22 16:35:49.567397', '2021-09-22 16:35:49.567397'),
	(3, 'Técnico', '2021-09-22 16:36:03.037729', '2021-09-22 16:36:03.037729');
/*!40000 ALTER TABLE `atuacao` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` int(11) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.categoria: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` (`id`, `categoria`, `created_at`, `updated_at`) VALUES
	(1, 'Feminino', '2021-09-22 16:40:49.041971', '2021-09-22 16:40:49.041971'),
	(2, 'Masculino', '2021-09-22 16:40:55.027462', '2021-09-22 16:40:55.027462');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.endereco
CREATE TABLE IF NOT EXISTS `endereco` (
  `cep` varchar(255) NOT NULL,
  `logradouro` varchar(255) NOT NULL,
  `complemento` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.endereco: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.migrations: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
	(1, 1631760221773, 'CreateCategoria1631760221773'),
	(2, 1631760326179, 'CreateModalidade1631760326179'),
	(3, 1631760339599, 'CreateEndereco1631760339599'),
	(4, 1631760606594, 'CreateAtuacao1631760606594'),
	(13, 1632329552225, 'CreateUser1632329552225');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.modalidade
CREATE TABLE IF NOT EXISTS `modalidade` (
  `id` int(11) NOT NULL,
  `modalidade` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.modalidade: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `modalidade` DISABLE KEYS */;
INSERT INTO `modalidade` (`id`, `modalidade`, `created_at`, `updated_at`) VALUES
	(1, 'Adulto', '2021-09-22 16:38:07.595825', '2021-09-22 16:38:07.595825'),
	(2, 'Paradesporto', '2021-09-22 16:38:16.183489', '2021-09-22 16:38:16.183489'),
	(3, 'Juvenil', '2021-09-22 16:39:25.435318', '2021-09-22 16:39:25.435318'),
	(4, 'Mirim', '2021-09-22 16:39:33.087387', '2021-09-22 16:39:33.087387'),
	(5, 'Infanto-Juvenil', '2021-09-22 16:39:42.951193', '2021-09-22 16:39:42.951193'),
	(6, 'Infantil', '2021-09-22 16:39:56.013803', '2021-09-22 16:39:56.013803'),
	(7, 'Master', '2021-09-22 16:40:04.711894', '2021-09-22 16:40:04.711894');
/*!40000 ALTER TABLE `modalidade` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.users
CREATE TABLE IF NOT EXISTS `users` (
  `nomeCompleto` varchar(255) DEFAULT NULL,
  `rg` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) DEFAULT NULL,
  `nacionalidade` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `naturalidade` varchar(255) DEFAULT NULL,
  `clube` varchar(255) DEFAULT NULL,
  `telefone` varchar(255) DEFAULT NULL,
  `celular` varchar(255) DEFAULT NULL,
  `passaporte` varchar(255) DEFAULT NULL,
  `modalidade_id` int(11) DEFAULT NULL,
  `categoria_id` int(11) DEFAULT NULL,
  `endereco_id` varchar(255) DEFAULT NULL,
  `atuacao_id` int(11) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `dt_nascimento` datetime DEFAULT NULL,
  `created_at` datetime(6) DEFAULT current_timestamp(6),
  `updated_at` datetime(6) DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  UNIQUE KEY `IDX_0c80872d387dcf00c567ebd4ca` (`rg`),
  UNIQUE KEY `IDX_230b925048540454c8b4c481e1` (`cpf`),
  KEY `FK_5035a63182e1da8302846d6f63a` (`modalidade_id`),
  KEY `FK_82a7b5721fe32d12c1d4fb7bff9` (`categoria_id`),
  KEY `FK_cc6234518f768fe22da66407b82` (`atuacao_id`),
  KEY `FK_2dc766fe0b47253353985bdb1a5` (`endereco_id`),
  CONSTRAINT `FK_2dc766fe0b47253353985bdb1a5` FOREIGN KEY (`endereco_id`) REFERENCES `endereco` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_5035a63182e1da8302846d6f63a` FOREIGN KEY (`modalidade_id`) REFERENCES `modalidade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_82a7b5721fe32d12c1d4fb7bff9` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_cc6234518f768fe22da66407b82` FOREIGN KEY (`atuacao_id`) REFERENCES `atuacao` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`nomeCompleto`, `rg`, `cpf`, `nacionalidade`, `email`, `password`, `sexo`, `naturalidade`, `clube`, `telefone`, `celular`, `passaporte`, `modalidade_id`, `categoria_id`, `endereco_id`, `atuacao_id`, `id`, `dt_nascimento`, `created_at`, `updated_at`) VALUES
	(NULL, NULL, NULL, NULL, 'jvmarques0798@gmail.com', '$2a$08$8WQrPqB3jCbIZhkyXOCiDuRuNzwnjDX84OCNSzM4ZBCN9N0jiG3ZW', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'c08aee32-fc05-4928-8453-9a855a419e2a', NULL, '2021-09-22 16:42:16.950131', '2021-09-22 16:42:16.950131');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
