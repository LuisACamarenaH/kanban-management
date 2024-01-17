import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanMenuComponent } from './kanban-menu.component';

describe('KanbanMenuComponent', () => {
  let component: KanbanMenuComponent;
  let fixture: ComponentFixture<KanbanMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KanbanMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
