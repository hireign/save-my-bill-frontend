import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EcoDevicePage } from './eco-device.page';

describe('EcoDevicePage', () => {
  let component: EcoDevicePage;
  let fixture: ComponentFixture<EcoDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EcoDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
