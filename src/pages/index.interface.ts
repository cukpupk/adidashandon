export interface rattingAndViewData {
    action: string
    "id": string,
    "userNickname": string,
    "title": string,
    "formattedDate": string,
    "submissionTime": string,
    "text": string,
    "isRecommended": boolean,
    "rating": number,
    "customQuestions": object,
    "customQuestionsOrder": any,
    "ratingRange": number,
    "positiveFeedbackCount": number,
    "negativeFeedbackCount": number,
    "photos": string[],
    "badges": string[],
    "responses": string[],
    "locale": string
    "likes": number,
    'dislikes': number
}