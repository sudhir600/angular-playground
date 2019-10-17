import { Component } from '@angular/core';

class common {
  public token = 'token_abc_123'
	c() {
		console.log('common.ts excuated', this.token)
    return 123
	}
}

export default new common()
