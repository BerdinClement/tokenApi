import { Test, TestingModule } from '@nestjs/testing';
import { IntrospectionController } from './introspection.controller';

describe('IntrospectionController', () => {
  let controller: IntrospectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntrospectionController],
    }).compile();

    controller = module.get<IntrospectionController>(IntrospectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
