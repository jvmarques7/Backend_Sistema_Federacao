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
  `id` varchar(255) NOT NULL,
  `atuacao` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.atuacao: ~3 rows (aproximadamente)
/*!40000 ALTER TABLE `atuacao` DISABLE KEYS */;
INSERT INTO `atuacao` (`id`, `atuacao`, `created_at`, `updated_at`) VALUES
	('1', 'Jogador', '2021-10-02 17:47:26.994307', '2021-10-02 17:47:27.071912'),
	('2', 'Árbitro', '2021-10-02 17:48:03.572369', '2021-10-02 17:48:03.572369'),
	('3', 'Técnico', '2021-10-02 18:45:55.000000', '2021-10-02 18:45:56.000000');
/*!40000 ALTER TABLE `atuacao` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.categoria
CREATE TABLE IF NOT EXISTS `categoria` (
  `id` varchar(255) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.categoria: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` (`id`, `categoria`, `created_at`, `updated_at`) VALUES
	('1', 'Feminino', '2021-10-02 18:59:34.000000', '2021-10-02 18:59:34.000000'),
	('2', 'Masculino', '2021-10-02 18:59:41.000000', '2021-10-02 18:59:41.000000');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.endereco
CREATE TABLE IF NOT EXISTS `endereco` (
  `cep` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.endereco: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` (`cep`, `logradouro`, `complemento`, `bairro`, `numero`, `user_id`, `cidade`, `estado`, `id`, `created_at`, `updated_at`) VALUES
	('74365500', 'Rua B22', 'Qd. 30 Lt. 15', 'Setor Novo Horizonte', 'C1', '2fca6d4f-a87a-4c41-a109-184e4ac926bf', 'Goiânia', 'GO', '4c883f02-a7ed-4599-903c-a331e78bb650', '2021-10-02 19:00:27.918361', '2021-10-02 19:01:08.000000');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.migrations: ~22 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
	(1, 1631760221773, 'CreateCategoria1631760221773'),
	(2, 1631760326179, 'CreateModalidade1631760326179'),
	(3, 1631760339599, 'CreateEndereco1631760339599'),
	(4, 1631760606594, 'CreateAtuacao1631760606594'),
	(14, 1632338894779, 'CreateUser1632338894779'),
	(16, 1632578274616, 'CreateUserAdmin1632578274616'),
	(17, 1632581422407, 'CreateUserAdmin1632581422407'),
	(18, 1633207443617, 'CreateAtuacao1633207443617'),
	(19, 1633208143492, 'CreateModalidade1633208143492'),
	(20, 1633208239976, 'CreateCategoria1633208239976'),
	(21, 1633208510651, 'CreateModalidade1633208510651'),
	(22, 1633208540536, 'CreateCategoria1633208540536'),
	(23, 1633209043954, 'CreateCategoria1633209043954'),
	(24, 1633209071107, 'CreateModalidade1633209071107'),
	(26, 1633209529302, 'CreateUser1633209529302'),
	(27, 1633209936847, 'CreateEndereco1633209936847'),
	(28, 1633210188266, 'CreateUser1633210188266'),
	(29, 1633210675293, 'CreateEndereco1633210675293'),
	(30, 1633211577584, 'CreateCategoria1633211577584'),
	(31, 1633211641168, 'CreateUser1633211641168'),
	(32, 1633211764613, 'CreateModalidade1633211764613'),
	(33, 1633211821481, 'CreateUser1633211821481');
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.modalidade
CREATE TABLE IF NOT EXISTS `modalidade` (
  `id` varchar(255) NOT NULL,
  `modalidade` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.modalidade: ~7 rows (aproximadamente)
/*!40000 ALTER TABLE `modalidade` DISABLE KEYS */;
INSERT INTO `modalidade` (`id`, `modalidade`, `created_at`, `updated_at`) VALUES
	('1', 'Adulto', '2021-10-02 18:58:26.000000', '2021-10-02 18:58:26.000000'),
	('2', 'Paradesporto', '2021-10-02 18:58:33.000000', '2021-10-02 18:58:33.000000'),
	('3', 'Juvenil', '2021-10-02 18:58:39.000000', '2021-10-02 18:58:39.000000'),
	('4', 'Mirim', '2021-10-02 18:58:45.000000', '2021-10-02 18:58:45.000000'),
	('5', 'Infanto-Juvenil', '2021-10-02 18:58:52.000000', '2021-10-02 18:58:56.050172'),
	('6', 'Infantil', '2021-10-02 18:59:05.000000', '2021-10-02 18:59:05.000000'),
	('7', 'Master', '2021-10-02 18:59:11.000000', '2021-10-02 18:59:11.000000');
/*!40000 ALTER TABLE `modalidade` ENABLE KEYS */;

-- Copiando estrutura para tabela sistema-fgb.useradmin
CREATE TABLE IF NOT EXISTS `useradmin` (
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.useradmin: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `useradmin` DISABLE KEYS */;
/*!40000 ALTER TABLE `useradmin` ENABLE KEYS */;

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
  `modalidade_id` varchar(255) DEFAULT NULL,
  `categoria_id` varchar(255) DEFAULT NULL,
  `atuacao_id` varchar(255) DEFAULT NULL,
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
  CONSTRAINT `FK_5035a63182e1da8302846d6f63a` FOREIGN KEY (`modalidade_id`) REFERENCES `modalidade` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_82a7b5721fe32d12c1d4fb7bff9` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_cc6234518f768fe22da66407b82` FOREIGN KEY (`atuacao_id`) REFERENCES `atuacao` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela sistema-fgb.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`nomeCompleto`, `rg`, `cpf`, `nacionalidade`, `email`, `password`, `sexo`, `naturalidade`, `clube`, `telefone`, `celular`, `passaporte`, `modalidade_id`, `categoria_id`, `atuacao_id`, `id`, `dt_nascimento`, `created_at`, `updated_at`) VALUES
	('João Victor Ribeiro Marques', '6426440', '704.970.151-37', 'Brasileiro', 'jvmarques0798@gmail.com', '$2a$08$Fo8mxVuJ5VkXd5BeF.VIJ.nQpqOc5PKR6IvMhYvpUeSiS9dGwagtW', 'Masculino', 'Brasileiro', 'Clube Teste', '(62) 3256-3959', '(62) 98276-8535', '123456', '2', '2', '1', '2fca6d4f-a87a-4c41-a109-184e4ac926bf', '1998-12-06 22:00:00', '2021-10-02 19:00:27.899150', '2021-10-02 19:01:08.000000');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
