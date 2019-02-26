-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE spGetStudentTest 
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

	SELECT an.QuestionId
	FROM Answer AS an
	INNER JOIN TestToQuestion AS eq ON an.QuestionId = eq.QuestionId
	WHERE eq.TestId = @ExamId
	ORDER BY an.QuestionId;
END
GO
