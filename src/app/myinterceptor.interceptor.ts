import { HttpInterceptorFn } from '@angular/common/http';

export const myinterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
