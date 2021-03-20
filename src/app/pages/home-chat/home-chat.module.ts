import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeChatPageRoutingModule } from './home-chat-routing.module';

import { HomeChatPage } from './home-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeChatPageRoutingModule
  ],
  declarations: [HomeChatPage]
})
export class HomeChatPageModule {}
