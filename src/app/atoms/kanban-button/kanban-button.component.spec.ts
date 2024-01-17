import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanButtonComponent } from './kanban-button.component';

describe('KanbanButtonComponent', () => {
  let component: KanbanButtonComponent;
  let fixture: ComponentFixture<KanbanButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
