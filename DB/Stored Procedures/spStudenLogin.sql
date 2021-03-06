USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spStudenLogin]    Script Date: 26-Feb-19 11:46:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spStudenLogin] 
	-- Add the parameters for the stored procedure here
	@Email varchar(100),
	@FirstName nvarchar(50),
	@LastName nvarchar(50),
	@TestId uniqueidentifier


AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here

if not  exists (select * from Student where StudentEmail = @Email)
	BEGIN
    INSERT INTO  Student VALUES(@Email,@FirstName,@LastName)
	END	    
END
BEGIN

if exists (SELECT * FROM TestHistory WHERE TestId = @TestId AND StudentEmail = @Email AND Grade IS NULL)
     BEGIN
	 SELECT th.TestHistoryId as testId
	 FROM TestHistory th	
	 END
ELSE
     BEGIN
	   INSERT INTO TestHistory(TestId,StudentEmail,Grade,StartDate)
	   VALUES(@TestId,@Email,null, GETDATE())
	   SELECT SCOPE_IDENTITY() as testId
	 END	 
END
