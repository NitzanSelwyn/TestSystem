USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spRegisterAdmin]    Script Date: 12-Feb-19 10:27:47 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[spRegisterAdmin]
	@FullName nchar(25),
	@Password varchar(100),
	@Email varchar(100)
AS
BEGIN

	--SET NOCOUNT ON;

	INSERT INTO Manager VALUES(@FullName, @Password,0,@Email)
	SELECT @@ROWCOUNT 
END
