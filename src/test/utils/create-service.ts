import { ProviderToken } from '@angular/core';
import { TestBed, TestModuleMetadata } from '@angular/core/testing';

export function createService<T extends ProviderToken<any>>(
  serviceClass: T,
  moduleDef: TestModuleMetadata = {}
): T {
  TestBed.configureTestingModule(moduleDef);
  const service = TestBed.inject(serviceClass);
  return service;
}
