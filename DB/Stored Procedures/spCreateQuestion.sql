USE [TestSystem]
GO
/****** Object:  StoredProcedure [dbo].[spCreateQuestion]    Script Date: 12-Feb-19 10:26:17 AM ******/
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
@Tags nvarchar(500)

AS
BEGIN

	SET NOCOUNT ON;

	INSERT INTO Question values(@Title,@TextBelow,@IsMultyChoice,@SubjectId,@CorrectCount,@IsHorizontal,@Tags)
	SELECT SCOPE_IDENTITY()
END

