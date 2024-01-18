import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanDropdownComponent } from './kanban-dropdown.component';

describe('KanbanDropdownComponent', () => {
  let component: KanbanDropdownComponent;
  let fixture: ComponentFixture<KanbanDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
