USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spUpdateAnswer]    Script Date: 12-Feb-19 10:26:42 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[spUpdateAnswer]
@QuestionId int,
@AnswerId int,
@IsCorrect bit,
@Title nvarchar(50)
AS
BEGIN

	SET NOCOUNT ON;

	UPDATE Answer SET
		[IsCorrect] = COALESCE(@IsCorrect,[IsCorrect]),
		[Title] = COALESCE(@Title,[Title])
		WHERE AnswerId = @AnswerId AND NOT EXISTS(SELECT 1 
	                                              FROM TestToQuestion 
												  WHERE  QuestionId = @QuestionId)
END
