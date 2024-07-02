import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAttentionComponent } from './call-attention.component';

describe('CallAttentionComponent', () => {
  let component: CallAttentionComponent;
  let fixture: ComponentFixture<CallAttentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallAttentionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallAttentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
