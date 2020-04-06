import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarbonFpPage } from './carbon-fp.page';

describe('CarbonFpPage', () => {
  let component: CarbonFpPage;
  let fixture: ComponentFixture<CarbonFpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarbonFpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarbonFpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
