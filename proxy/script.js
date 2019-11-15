import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  rps: 1000,
  throw: true,
};

export default function () {
  const res1 = http.get(`http://ec2-3-15-12-216.us-east-2.compute.amazonaws.com:3003/?${Math.round(Math.random() * 1000000)}`);

  const res2 = http.get(`http://ec2-3-15-12-216.us-east-2.compute.amazonaws.com:3003/${Math.round(Math.random() * 10000000)}`);

  const res3 = http.get(`http://ec2-3-15-12-216.us-east-2.compute.amazonaws.com:3003/?id=${Math.round(Math.random() * 1000000)}`);
  check(res1, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
  check(res2, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
  check(res3, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
}
