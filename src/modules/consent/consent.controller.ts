import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ConsentService } from './consent.service';
import { CreateConsentDto } from './dto/create-consent.dto';

@Controller('consent')
export class ConsentController {
  constructor(private readonly consentService: ConsentService) {}

  @Post()
  create(@Body() createConsentDto: CreateConsentDto) {
    return this.consentService.create(createConsentDto);
  }

  @Get()
  findAll() {
    return this.consentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consentService.findOne(+id);
  }
}
