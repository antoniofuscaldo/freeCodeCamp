/**

File Storage

Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
Return the number of whole files the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.

Tests:
Waiting:1. numberOfFiles(500, "KB", 1) should return 2000.
Waiting:2. numberOfFiles(50000, "B", 1) should return 20000.
Waiting:3. numberOfFiles(5, "MB", 1) should return 200.
Waiting:4. numberOfFiles(4096, "B", 1.5) should return 366210.
Waiting:5. numberOfFiles(220.5, "KB", 100) should return 453514.
Waiting:6. numberOfFiles(4.5, "MB", 750) should return 166666.

*/

export function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  let bytes;
  if (fileUnit === 'B') bytes = fileSize;
  else if (fileUnit === 'KB') bytes = fileSize * 1000;
  else bytes = fileSize * 1000 * 1000;
  const driveBytes = driveSizeGb * 1000 * 1000 * 1000;
  return Math.floor(driveBytes / bytes);
}
