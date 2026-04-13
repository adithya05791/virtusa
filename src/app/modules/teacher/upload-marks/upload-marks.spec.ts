import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMarks } from './upload-marks';

describe('UploadMarks', () => {
  let component: UploadMarks;
  let fixture: ComponentFixture<UploadMarks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadMarks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMarks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
