import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanThemeComponent } from './kanban-theme.component';

describe('KanbanThemeComponent', () => {
  let component: KanbanThemeComponent;
  let fixture: ComponentFixture<KanbanThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanThemeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KanbanThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
