export interface QuestionAttachmentsRepository {
  deleteManyByQuestionId(questionId: string): Promise<void>
}
