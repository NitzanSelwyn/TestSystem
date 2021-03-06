USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spGetStudentTest]    Script Date: 26-Feb-19 01:53:49 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spGetStudentTest] 
	-- Add the parameters for the stored procedure here
	@ExamId uniqueidentifier
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT  TestId,[Language],[Name],OpeningText,PassingGrade
	FROM Test
	WHERE TestId = @ExamId;
	
	SELECT qa.QuestionId,qa.IsHorizontal,qa.IsMultyChoice,qa.TextBelow,qa.Title
	FROM Question AS qa
	INNER JOIN TestToQuestion AS eq ON qa.QuestionId = eq.QuestionId
	WHERE eq.TestId = @ExamId 
	ORDER BY qa.QuestionId;

	SELECT an.Title,an.AnswerId,an.QuestionId
	FROM Answer AS an
	INNER JOIN TestToQuestion AS eq ON an.QuestionId = eq.QuestionId
	WHERE eq.TestId = @ExamId
	ORDER BY an.QuestionId;
END
