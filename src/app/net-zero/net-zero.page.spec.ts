import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetZeroPage } from './net-zero.page';

describe('NetZeroPage', () => {
  let component: NetZeroPage;
  let fixture: ComponentFixture<NetZeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetZeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetZeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
