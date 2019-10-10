import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateTodoComponent } from './modal-create-todo.component';

describe('ModalComponent', () => {
  let component: ModalCreateTodoComponent;
  let fixture: ComponentFixture<ModalCreateTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCreateTodoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
