import { update } from '@reshuffle/db';

/* @expose */
export async function addAndGet(num) {
 return update('num', (prevNumber) => {
   if (prevNumber) {
     return num + prevNumber;
   }
   return num;
 });
}
