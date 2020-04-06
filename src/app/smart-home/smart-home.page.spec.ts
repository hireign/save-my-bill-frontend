import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmartHomePage } from './smart-home.page';

describe('SmartHomePage', () => {
  let component: SmartHomePage;
  let fixture: ComponentFixture<SmartHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmartHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
