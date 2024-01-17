import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanInputComponent } from './kanban-input.component';

describe('KanbanInputComponent', () => {
  let component: KanbanInputComponent;
  let fixture: ComponentFixture<KanbanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
