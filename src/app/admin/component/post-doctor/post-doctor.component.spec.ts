import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDoctorComponent } from './post-doctor.component';

describe('PostDoctorComponent', () => {
  let component: PostDoctorComponent;
  let fixture: ComponentFixture<PostDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
