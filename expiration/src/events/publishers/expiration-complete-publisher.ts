import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@rwojtickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
