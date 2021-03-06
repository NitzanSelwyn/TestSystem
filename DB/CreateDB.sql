
ALTER DATABASE [TestSystem] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TestSystem] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TestSystem] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TestSystem] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TestSystem] SET ARITHABORT OFF 
GO
ALTER DATABASE [TestSystem] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TestSystem] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TestSystem] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TestSystem] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TestSystem] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TestSystem] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TestSystem] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TestSystem] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TestSystem] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TestSystem] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TestSystem] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TestSystem] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TestSystem] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TestSystem] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TestSystem] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TestSystem] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TestSystem] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TestSystem] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [TestSystem] SET  MULTI_USER 
GO
ALTER DATABASE [TestSystem] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TestSystem] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TestSystem] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TestSystem] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TestSystem] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TestSystem] SET QUERY_STORE = OFF
GO
USE [TestSystem]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [TestSystem]
GO
/****** Object:  Table [dbo].[Answer]    Script Date: 04/02/2019 14:27:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Answer](
	[AnswerId] [int] IDENTITY(1,1) NOT NULL,
	[IsCorrect] [bit] NOT NULL,
	[QuestionId] [int] NOT NULL,
	[Title] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Answer] PRIMARY KEY CLUSTERED 
(
	[AnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Manager]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Manager](
	[ManagerId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nchar](25) NULL,
	[Password] [varchar](100) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[Email] [varchar](100) NOT NULL,
 CONSTRAINT [PK_Manager] PRIMARY KEY CLUSTERED 
(
	[ManagerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Organization]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Organization](
	[OrganizationId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Organization] PRIMARY KEY CLUSTERED 
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[OrganizationToManager]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrganizationToManager](
	[ManagerId] [int] NOT NULL,
	[OrganizationId] [int] NOT NULL,
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_OrganizationToManager] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[QuestionId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](200) NOT NULL,
	[TextBelow] [varchar](1500) NULL,
	[IsMultyChoice] [bit] NOT NULL,
	[SubjectId] [int] NOT NULL,
	[CorrectCount] [smallint] NOT NULL,
	[IsHorizontal] [bit] NOT NULL,
	[Tags] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[QuestionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Student]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Student](
	[StudentEmail] [varchar](100) NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[StudentEmail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentAnswer]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentAnswer](
	[StudentAnswerId] [int] IDENTITY(1,1) NOT NULL,
	[QuestionId] [int] NOT NULL,
	[AnswerId] [int] NOT NULL,
	[TestHistoryId] [int] NOT NULL,
	[QuestionIndex] [int] NOT NULL,
 CONSTRAINT [PK_StudentAnswer] PRIMARY KEY CLUSTERED 
(
	[StudentAnswerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Subject]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Subject](
	[SubjectId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[OrganizationId] [int] NOT NULL,
 CONSTRAINT [PK_Subject] PRIMARY KEY CLUSTERED 
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SubjectToQuestion]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SubjectToQuestion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[SubjectId] [int] NOT NULL,
	[QuestionId] [int] NOT NULL,
 CONSTRAINT [PK_SubjectToQuestion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Test]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Test](
	[TestId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[SubjectId] [int] NOT NULL,
 CONSTRAINT [PK_Test] PRIMARY KEY CLUSTERED 
(
	[TestId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TestHistory]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestHistory](
	[TestHistoryId] [int] IDENTITY(1,1) NOT NULL,
	[StudentEmail] [varchar](100) NOT NULL,
	[TestId] [int] NOT NULL,
	[Grade] [int] NOT NULL,
 CONSTRAINT [PK_TestHistory] PRIMARY KEY CLUSTERED 
(
	[TestHistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TestToQuestion]    Script Date: 04/02/2019 14:27:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestToQuestion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TestId] [int] NOT NULL,
	[QuestionId] [int] NOT NULL,
 CONSTRAINT [PK_TestToQuestion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_CorrectCount]  DEFAULT ((1)) FOR [CorrectCount]
GO
ALTER TABLE [dbo].[Answer]  WITH CHECK ADD  CONSTRAINT [FK_Answer_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([QuestionId])
GO
ALTER TABLE [dbo].[Answer] CHECK CONSTRAINT [FK_Answer_Question]
GO
ALTER TABLE [dbo].[OrganizationToManager]  WITH CHECK ADD  CONSTRAINT [FK_OrganizationToManager_Manager] FOREIGN KEY([ManagerId])
REFERENCES [dbo].[Manager] ([ManagerId])
GO
ALTER TABLE [dbo].[OrganizationToManager] CHECK CONSTRAINT [FK_OrganizationToManager_Manager]
GO
ALTER TABLE [dbo].[OrganizationToManager]  WITH CHECK ADD  CONSTRAINT [FK_OrganizationToManager_Organization] FOREIGN KEY([OrganizationId])
REFERENCES [dbo].[Organization] ([OrganizationId])
GO
ALTER TABLE [dbo].[OrganizationToManager] CHECK CONSTRAINT [FK_OrganizationToManager_Organization]
GO
ALTER TABLE [dbo].[StudentAnswer]  WITH CHECK ADD  CONSTRAINT [FK_StudentAnswer_Answer] FOREIGN KEY([AnswerId])
REFERENCES [dbo].[Answer] ([AnswerId])
GO
ALTER TABLE [dbo].[StudentAnswer] CHECK CONSTRAINT [FK_StudentAnswer_Answer]
GO
ALTER TABLE [dbo].[StudentAnswer]  WITH CHECK ADD  CONSTRAINT [FK_StudentAnswer_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([QuestionId])
GO
ALTER TABLE [dbo].[StudentAnswer] CHECK CONSTRAINT [FK_StudentAnswer_Question]
GO
ALTER TABLE [dbo].[StudentAnswer]  WITH CHECK ADD  CONSTRAINT [FK_StudentAnswer_TestHistory] FOREIGN KEY([TestHistoryId])
REFERENCES [dbo].[TestHistory] ([TestHistoryId])
GO
ALTER TABLE [dbo].[StudentAnswer] CHECK CONSTRAINT [FK_StudentAnswer_TestHistory]
GO
ALTER TABLE [dbo].[Subject]  WITH CHECK ADD  CONSTRAINT [FK_Subject_Organization] FOREIGN KEY([OrganizationId])
REFERENCES [dbo].[Organization] ([OrganizationId])
GO
ALTER TABLE [dbo].[Subject] CHECK CONSTRAINT [FK_Subject_Organization]
GO
ALTER TABLE [dbo].[SubjectToQuestion]  WITH CHECK ADD  CONSTRAINT [FK_SubjectToQuestion_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([QuestionId])
GO
ALTER TABLE [dbo].[SubjectToQuestion] CHECK CONSTRAINT [FK_SubjectToQuestion_Question]
GO
ALTER TABLE [dbo].[SubjectToQuestion]  WITH CHECK ADD  CONSTRAINT [FK_SubjectToQuestion_Subject] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[Subject] ([SubjectId])
GO
ALTER TABLE [dbo].[SubjectToQuestion] CHECK CONSTRAINT [FK_SubjectToQuestion_Subject]
GO
ALTER TABLE [dbo].[Test]  WITH CHECK ADD  CONSTRAINT [FK_Test_Subject] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[Subject] ([SubjectId])
GO
ALTER TABLE [dbo].[Test] CHECK CONSTRAINT [FK_Test_Subject]
GO
ALTER TABLE [dbo].[TestHistory]  WITH CHECK ADD  CONSTRAINT [FK_TestHistory_Student] FOREIGN KEY([StudentEmail])
REFERENCES [dbo].[Student] ([StudentEmail])
GO
ALTER TABLE [dbo].[TestHistory] CHECK CONSTRAINT [FK_TestHistory_Student]
GO
ALTER TABLE [dbo].[TestHistory]  WITH CHECK ADD  CONSTRAINT [FK_TestHistory_Test] FOREIGN KEY([TestId])
REFERENCES [dbo].[Test] ([TestId])
GO
ALTER TABLE [dbo].[TestHistory] CHECK CONSTRAINT [FK_TestHistory_Test]
GO
ALTER TABLE [dbo].[TestToQuestion]  WITH CHECK ADD  CONSTRAINT [FK_TestToQuestion_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([QuestionId])
GO
ALTER TABLE [dbo].[TestToQuestion] CHECK CONSTRAINT [FK_TestToQuestion_Question]
GO
ALTER TABLE [dbo].[TestToQuestion]  WITH CHECK ADD  CONSTRAINT [FK_TestToQuestion_Test] FOREIGN KEY([TestId])
REFERENCES [dbo].[Test] ([TestId])
GO
ALTER TABLE [dbo].[TestToQuestion] CHECK CONSTRAINT [FK_TestToQuestion_Test]
GO
USE [master]
GO
ALTER DATABASE [TestSystem] SET  READ_WRITE 
GO
