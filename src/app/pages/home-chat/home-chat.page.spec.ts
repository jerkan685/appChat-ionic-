import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeChatPage } from './home-chat.page';

describe('HomeChatPage', () => {
  let component: HomeChatPage;
  let fixture: ComponentFixture<HomeChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
