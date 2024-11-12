export abstract class AbstractUseCase<ResponseObject> {
  abstract execute(...args: any[]): Promise<ResponseObject>;
}
