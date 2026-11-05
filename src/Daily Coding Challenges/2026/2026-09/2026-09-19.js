/**

Photo Storage

Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:

1 gigabyte equals 1000 megabytes.
Return the number of whole photos the drive can store.

Tests:
Waiting:1. numberOfPhotos(1, 1) should return 1000.
Waiting:2. numberOfPhotos(2, 1) should return 500.
Waiting:3. numberOfPhotos(4, 256) should return 64000.
Waiting:4. numberOfPhotos(3.5, 750) should return 214285.
Waiting:5. numberOfPhotos(3.5, 5.5) should return 1571.

*/

export function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  return Math.floor((hardDriveSizeGb * 1000) / photoSizeMb);
}
