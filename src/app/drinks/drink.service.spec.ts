/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DrinkService } from './drink.service';

describe('DrinkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrinkService]
    });
  });

  it('should ...', inject([DrinkService], (service: DrinkService) => {
    expect(service).toBeTruthy();
  }));
});
