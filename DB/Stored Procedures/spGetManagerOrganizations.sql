USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spGetManagerOrganizations]    Script Date: 13-Feb-19 12:34:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[spGetManagerOrganizations] 
	-- Add the parameters for the stored procedure here
	@Email varchar(100)
AS

BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT o.Name, o.OrganizationId
	FROM Organization o
	left join OrganizationToManager otm on o.OrganizationId = otm.OrganizationId
	left join Manager m on otm.ManagerId = m.ManagerId
	WHERE m.Email = @Email

END
