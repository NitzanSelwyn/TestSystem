export class Question {
    constructor(isHorizantle, isMultiCoice, questionText, textBelow, subjectId,questionTags) {
      this.IsHorizantle = isHorizantle;
      this.IsMultiCoice = isMultiCoice;
      this.QuestionText = questionText;
      this.TextBelow = textBelow;
      this.SubjectId = subjectId;
      this.QuestionTags = questionTags;
    }
  
    public IsHorizantle: boolean;
    public IsMultiCoice: boolean;
    public QuestionText: string;
    public TextBelow: string;
    public SubjectId: string;
    public QuestionTags:string;
    
  }
  