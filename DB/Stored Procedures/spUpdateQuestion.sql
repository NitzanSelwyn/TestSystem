USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spUpdateQuestion]    Script Date: 12-Feb-19 10:27:08 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[spUpdateQuestion]
@QuestionId int,
@Title nvarchar(200),
@TextBelow nvarchar (1500),
@IsMultyChoice bit,
@SubjectId int,
@CorrectCount smallint,
@IsHorizontal bit,
@Tags nvarchar(500)

AS
BEGIN

	SET NOCOUNT ON;

	UPDATE Question SET
	[Title] = COALESCE(@Title,[Title]),
	[TextBelow] = COALESCE(@TextBelow,[TextBelow]),
	[IsMultyChoice] = COALESCE(@IsMultyChoice,[IsMultyChoice]),
	[SubjectId] = COALESCE(@SubjectId,[SubjectId]),
	[CorrectCount] = COALESCE(@CorrectCount,[CorrectCount]),
	[IsHorizontal] = COALESCE(@IsHorizontal,[IsHorizontal]),
	[Tags] = COALESCE(@Tags,[Tags])

	WHERE QuestionId = @QuestionId AND NOT EXISTS(SELECT 1 
	                                              FROM TestToQuestion 
												  WHERE  QuestionId = @QuestionId)
END
