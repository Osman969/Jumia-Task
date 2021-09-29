import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoUsersComponent } from './no-users-component';

describe('NoUsersComponentComponent', () => {
  let component: NoUsersComponent;
  let fixture: ComponentFixture<NoUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
