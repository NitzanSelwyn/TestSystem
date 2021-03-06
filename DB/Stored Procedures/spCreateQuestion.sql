USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spCreateQuestion]    Script Date: 18-Feb-19 03:32:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
ALTER PROCEDURE [dbo].[spCreateQuestion]
@Title nvarchar(200),
@TextBelow  nvarchar(1500),
@IsMultyChoice bit,
@SubjectId int,
@CorrectCount smallint,
@IsHorizontal bit,
@Tags nvarchar(500),
@Answers AS AnswersFromServer readonly
AS
BEGIN

SET NOCOUNT ON;
Declare @questionId int;
	BEGIN TRANSACTION;
	      BEGIN TRY
                 INSERT INTO Question values(@Title,@TextBelow,@IsMultyChoice,@SubjectId,@CorrectCount,@IsHorizontal,@Tags)

				 SET @questionId = SCOPE_IDENTITY();

				 INSERT INTO Answer(IsCorrect,QuestionId,Title)
				 SELECT IsCorrect,@questionId,Title
				 FROM @Answers
				 
				 COMMIT TRANSACTION

		  END TRY
		  BEGIN CATCH
		        ROLLBACK TRANSACTION
		  END CATCH
END

