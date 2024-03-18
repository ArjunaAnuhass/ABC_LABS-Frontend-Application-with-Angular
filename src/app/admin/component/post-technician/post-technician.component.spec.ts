import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTechnicianComponent } from './post-technician.component';

describe('PostTechnicianComponent', () => {
  let component: PostTechnicianComponent;
  let fixture: ComponentFixture<PostTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostTechnicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
