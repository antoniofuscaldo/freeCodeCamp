/**

Video Storage

Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
If not given one of the video units above, return "Invalid video unit".
The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
If not given one of the hard drive units above, return "Invalid drive unit".
Return the number of whole videos the drive can fit.
Use the following conversions:
Unit	Equivalent
1 B	1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
1 TB	1000 GB
For example, given 500, "MB", 100, and "GB" as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.

Tests:
Waiting:1. numberOfVideos(500, "MB", 100, "GB") should return 200.
Waiting:2. numberOfVideos(1, "TB", 10, "TB") should return "Invalid video unit".
Waiting:3. numberOfVideos(2000, "MB", 100000, "MB") should return "Invalid drive unit".
Waiting:4. numberOfVideos(500000, "KB", 2, "TB") should return 4000.
Waiting:5. numberOfVideos(1.5, "GB", 2.2, "TB") should return 1466.

*/

export function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  const videoUnits = { B: 1, KB: 1000, MB: 1000 ** 2, GB: 1000 ** 3 };
  const driveUnits = { GB: 1000 ** 3, TB: 1000 ** 4 };

  if (!videoUnits[videoUnit]) return 'Invalid video unit';
  if (!driveUnits[driveUnit]) return 'Invalid drive unit';

  const videoBytes = videoSize * videoUnits[videoUnit];
  const driveBytes = driveSize * driveUnits[driveUnit];

  return Math.floor(driveBytes / videoBytes);
}
