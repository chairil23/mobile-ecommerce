import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageItemPage } from './message-item';

@NgModule({
  declarations: [
    MessageItemPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageItemPage),
  ],
})
export class MessageItemPageModule {}
