import { TestBed } from '@angular/core/testing';
import { ApiEnacomService } from 'src/app/apienacom.service';


describe('TestService', () => {
  let service: ApiEnacomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEnacomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
