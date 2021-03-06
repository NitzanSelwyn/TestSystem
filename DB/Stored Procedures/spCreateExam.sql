USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spCreateExam]    Script Date: 21-Feb-19 03:44:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spCreateExam] 
	-- Add the parameters for the stored procedure here
	@Name nvarchar(50),
	@OpenningText nvarchar(100),
	@SubjectId int,
	@Language varchar(50),
	@OrgenaizerEmail nvarchar(50),
	@PassingGrade int,
	@SuccessText nvarchar(500),
	@FailText nvarchar(500),
	@CertificateUrl varchar(300),
	@ShowAnswer bit,
	@SuccessMailSubject nvarchar(255),
	@SuccessMailBody nvarchar(2000),
	@FailMailSubject nvarchar(255),
	@FailMailBody nvarchar(2000),
	@SendEmail bit,
	@QuestionsIds AS QuestionIdsList READONLY
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
SET NOCOUNT ON;
Declare @Id uniqueidentifier;
Declare @ExamId int;
	BEGIN TRANSACTION;
	      BEGIN TRY
            SET @Id = NEWID();




           -- Insert statements for procedure here
	       INSERT INTO Test(TestId,EmailFaildBody,EmailFaildSubject,EmailSuccesBody,EmailSuccesSubject,FaildText,[Language],[Name],OrganizerEmail,
	       PassingGrade,SendEmaill,ShowAnswers,SubjectId,SuccessText)
	       VALUES (@id,@FailMailBody,@FailMailSubject,@SuccessMailBody,@SuccessMailSubject,@FailText,@Language,@Name,@OrgenaizerEmail,
	       @PassingGrade,@SendEmail,@ShowAnswer,@SubjectId,@SuccessText)
	       
	       --SET @ExamId = SCOPE_IDENTITY();
           INSERT INTO TestToQuestion(TestId,QuestionId)
	       SELECT @Id,ID 
	       FROM @QuestionsIds
	       
	       SELECT @Id as ExamID

		   COMMIT TRANSACTION

		  END TRY
		  BEGIN CATCH
		        ROLLBACK TRANSACTION
		  END CATCH

END
