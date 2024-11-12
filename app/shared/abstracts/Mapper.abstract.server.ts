export abstract class AbstractMapper<
  RequestObject,
  DomainObject,
  ResponseObject
> {
  abstract toRequest(domainObject: DomainObject): RequestObject;

  abstract toDomain(requestObject: RequestObject): DomainObject;

  abstract toResponse(domainObject: DomainObject): ResponseObject;
}
