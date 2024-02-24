import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findAllUser() {
    return [
      { id: '0001', name: '迣岳' },
      { id: '0002', name: '悠悠然' },
    ];
  }
}
