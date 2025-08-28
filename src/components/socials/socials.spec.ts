import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Socials } from './socials';

describe('Socials', () => {
  let component: Socials;
  let fixture: ComponentFixture<Socials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Socials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Socials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
