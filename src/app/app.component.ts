import { Component } from '@angular/core';
import { PubsubService } from '@fsms/angular-pubsub';
import { OrderPaid } from './messages/order-paid-message';
import { OrderShipped } from './messages/order-shipped-message';
import { OrderPlaced, OrderPlacedType } from './messages/placeorder-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Pubsub Framework Example App';

  constructor(private pubsubService: PubsubService) {
    this.pubsubService.subscribe({
      messageType: OrderPlacedType,
      callback: (msg) => console.log('received', msg),
    });
  }

  orderPlaced($event: KeyboardEvent) {
    $event.preventDefault();
    this.pubsubService.publish(new OrderPlaced('20 Apples'));
  }
  orderPaid($event: KeyboardEvent) {
    $event.preventDefault();
    this.pubsubService.publish(new OrderPaid('20 USD'));
  }
  orderShipped($event: KeyboardEvent) {
    $event.preventDefault();
    this.pubsubService.publish(new OrderShipped('CA, USA'));
  }
}
