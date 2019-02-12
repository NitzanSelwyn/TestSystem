USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spCreateAnswer]    Script Date: 12-Feb-19 10:26:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[spCreateAnswer]
@IsCorrect bit,
@QuestionId int,
@Title nvarchar(50)
AS
BEGIN

	SET NOCOUNT ON;
	INSERT INTO Answer values(@IsCorrect,@QuestionId,@Title)
END
