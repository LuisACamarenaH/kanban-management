import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTaskModalComponent } from './show-task-modal.component';

describe('ShowTaskModalComponent', () => {
  let component: ShowTaskModalComponent;
  let fixture: ComponentFixture<ShowTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowTaskModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
