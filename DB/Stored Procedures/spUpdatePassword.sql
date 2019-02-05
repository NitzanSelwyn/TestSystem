USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spUpdatePassword]    Script Date: 05-Feb-19 02:07:24 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spUpdatePassword]
          @ManagerId  int,
		  @Password varchar(100)
	-- Add the parameters for the stored procedure here

AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here	
	UPDATE Manager
	SET [Password] = @Password
	WHERE ManagerId = @ManagerId

	
END
