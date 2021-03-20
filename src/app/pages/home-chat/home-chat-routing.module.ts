import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChatPage } from './home-chat.page';

const routes: Routes = [
  {
    path: '',
    component: HomeChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeChatPageRoutingModule {}
