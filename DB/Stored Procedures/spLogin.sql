USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spLogin]    Script Date: 05-Feb-19 10:11:27 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spLogin]
              @Email nvarchar(50) , @Password nvarchar(50)
	-- Add the parameters for the stored procedure here
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT Email,[FullName]
	FROM Manager
	WHERE [Password] = @Password AND Email = @Email AND isActive = 1
END
