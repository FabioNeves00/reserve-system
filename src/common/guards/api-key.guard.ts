import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DEFAULT_API_KEY } from '../constants';
import { ConfigurationService } from '../../config/config.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigurationService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    return request.headers[DEFAULT_API_KEY] === this.configService.getApiKey();
  }
}
