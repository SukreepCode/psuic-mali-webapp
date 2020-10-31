import { Test, TestingModule } from '@nestjs/testing';
import { EnrollController } from './enroll.controller';

describe('EnrollController', () => {
  let controller: EnrollController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnrollController],
    }).compile();

    controller = module.get<EnrollController>(EnrollController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
