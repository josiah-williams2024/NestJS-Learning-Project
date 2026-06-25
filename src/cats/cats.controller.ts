import { Body, Controller, Get } from '@nestjs/common';
@Controller('cats')
class CatsController {
  @Get()
  findAll(): string {
    return 'does this work to get all the cats';
  }
}

export default CatsController;
