import { Injectable, Type } from '@angular/core';
import { IHandleMessage, registerHandler } from '@fsms/angular-pubsub';
import { OrderPaid } from '../messages/order-paid-message';
import { OrderPlaced } from '../messages/placeorder-message';

@Injectable({ providedIn: 'root' })
@registerHandler({
  messages: [OrderPaid],
})
export class ShipOrderService implements IHandleMessage<OrderPaid> {
  handle(message: OrderPaid): void {
    console.log('shipping service: received orderpaid', message);
  }
}
@Injectable({ providedIn: 'root' })
@registerHandler({
  messages: [OrderPlaced, OrderPaid],
})
export class PrepareOrderService
  implements IHandleMessage<OrderPaid | OrderPlaced> {
  handle(message: OrderPaid | OrderPlaced): void {
    console.log('PrepareOrderService service: received message', message);
  }
}