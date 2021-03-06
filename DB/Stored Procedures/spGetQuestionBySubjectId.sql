USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spGetQuestionBySubjectId]    Script Date: 06-Feb-19 12:07:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spGetQuestionBySubjectId] 
	-- Add the parameters for the stored procedure here
	@SubjectId int,
	@OrganizationId int

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT QuestionId,Title,TextBelow,IsMultyChoice,Question.SubjectId,CorrectCount,IsHorizontal,Tags
	FROM Question
	LEFT JOIN [Subject] ON Question.SubjectId = [Subject].SubjectId 
	WHERE Question.SubjectId = @SubjectId AND [Subject].OrganizationId = @OrganizationId
END
