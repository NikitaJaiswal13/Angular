import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAddressComponent } from './author-address.component';

describe('AuthorAddressComponent', () => {
  let component: AuthorAddressComponent;
  let fixture: ComponentFixture<AuthorAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
