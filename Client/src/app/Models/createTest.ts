export class CreateTest{
    languge:string;
    testName:string;
    passingGrade:number;
    showCorrectAnswerAfterSubmmishion:boolean;
    header:string;
    messageToShowOnSuccess:string;
    messageToShowOnFailliure:string;
    sendEmaillWhenComplete:boolean;
    emailToCC:string
    passingMessageSubject: string;
    passingMessageBody: string;
    failingMessageSubject: string;
    failingMessageBody: string;
}