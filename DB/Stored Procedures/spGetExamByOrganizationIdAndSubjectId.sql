USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spGetExamByOrganizationIdAndSubjectId]    Script Date: 24-Feb-19 10:10:51 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spGetExamByOrganizationIdAndSubjectId]
	-- Add the parameters for the stored procedure here
	@OrganizationId int,
	@SubjectId int

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT t.[Name],t.TestId,COUNT(q.QuestionId) as 'NumberOfQuestions'
	FROM Test as t
	INNER JOIN Question as q ON  q.SubjectId = t.SubjectId
	INNER JOIN [Subject] as s ON s.SubjectId = q.SubjectId
	WHERE s.OrganizationId = @OrganizationId AND q.SubjectId = @SubjectId
	GROUP BY t.[Name], t.TestId
END
