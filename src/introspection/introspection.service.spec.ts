import { Test, TestingModule } from '@nestjs/testing';
import { IntrospectionService } from './introspection.service';

describe('IntrospectionService', () => {
  let service: IntrospectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IntrospectionService],
    }).compile();

    service = module.get<IntrospectionService>(IntrospectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
