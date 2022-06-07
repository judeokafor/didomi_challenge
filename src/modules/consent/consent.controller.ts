import { Controller, Post, Body } from '@nestjs/common';
import { ConsentService } from './consent.service';
import { CreateConsentDto } from './dto/create-consent.dto';

@Controller('events')
export class ConsentController {
  constructor(private readonly consentService: ConsentService) {}

  @Post()
  create(@Body() createConsentDto: CreateConsentDto) {
    return this.consentService.create(createConsentDto);
  }
}
