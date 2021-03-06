USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spGetQuestionAnswersByQuestionId]    Script Date: 17-Feb-19 05:25:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spGetQuestionAnswersByQuestionId] 
	-- Add the parameters for the stored procedure here
	@QuestionId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT a.IsCorrect,a.Title,q.IsHorizontal,q.Title as QuestionTitle,q.TextBelow,q.IsMultyChoice
	FROM Answer a
	left join Question q on a.QuestionId = q.QuestionId
	WHERE a.QuestionId = @QuestionId
END
