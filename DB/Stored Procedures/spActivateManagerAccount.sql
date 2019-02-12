USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spActivateManagerAccount]    Script Date: 12-Feb-19 10:25:35 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[spActivateManagerAccount]
@ManagerId int
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE Manager
	SET IsActive = 1 
	where ManagerId = @ManagerId;
END
