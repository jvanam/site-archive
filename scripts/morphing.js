var morphing = anime({
  targets: '#pcpath',
  d: [

    { value: 'M260.4 6.66c-24.69-8.76-44.78-6.65-76-3-25.57 3-31.42 6.65-112 31-47 14.22-54.79 15.92-62 26-17.73 24.81-10.78 70.44 14 93 25.89 23.57 50.05 2.7 112 15 75.75 15.05 102.5 58.75 137 42 14.05-6.82 20-19.21 32-44 11.68-24.2 36-74.57 12-117C301.29 21.18 271.52 10.61 260.4 6.66Z' },
    { value: 'M264,6.66c-24.68-8.76-44.77-6.65-76-3-25.57,3-22.42-5.35-103,19-47,14.22-63.79,27.92-71,38-17.73,24.81-19.78,71.44,5,94,25.89,23.57,35.06,35.7,97,48,75.76,15.05,121.5,16.75,156,0,14.05-6.82,18-18.21,30-43,11.69-24.2,32-67.57,8-110C293.85,21.18,275.08,10.61,264,6.66Z' },
    { value: 'M248.74,4.41c-8.89-1.79-30.89-5.67-76-3-59.62,3.53-89.43,5.29-112,21-36.51,25.43-47.34,67.2-53,89-6.43,24.81-11.48,44.28-2,62,13.43,25.08,46.95,29.75,97,36,64.5,8.05,101.19,12.64,142-9,7.07-3.75,48.73-26.61,70-76,7.54-17.49,24.87-57.71,6-87C307,16.12,280.82,10.85,248.74,4.41Z' }
  ],
  easing: 'linear',
  duration: 10000,
  loop: true
});

var morphing = anime({
  targets: '#artpath',
  d: [

    { value: 'M261 109.06c 10 -46.2 -14.92 -62.5 -37 -83-26.37 -24.5 -69.52 -31.88 -105 -20 -45.93 15.37 -64.3 58.11 -75, 83 -7.86 18.3 -15.66 35.45 -23,70,-16.81,107.57,0,70.62 40,93,90,38.46,198.73,6.69,207-34C297.84,183.4,263,176.14,261,109.06Z' }
  ],
  easing: 'cubicBezier(.5, .05, .1, .3)',
  direction: 'alternate',
  duration: 3500,
  loop: true
});

var morphing = anime({
  targets: '#extrapathone',
  d: [
    { value: 'M246.36,14.44c-9.22,13.67,4.21,25.21-5,44-6,12.27-22.43,19.68-55,34-25.2,11.07-34.64,13.25-61,26-23.59,11.41-29,16-33,20-16.39,16.69-10.67,27.77-23,46-21,31.08-52.94,21.45-65,49-6.39,14.6-4.93,34.46,5,43s19.82-1.08,42,4c19.42,4.44,20.43,13.7,49,28,22.92,11.46,38.27,19.14,47,43,11 -8.38,3.88-37.09,8-79a91,91,0,0,1,3.24-18.19c4.09-13.73,10.65-20.3,16.76-49.81,7.06-34.07,2.57-39.4,11-50,10.72-13.48,22.83-11,63-24,47.51-15.39,42.25-20.65,59-22,24.64,1,57.4,8.58,83,28,11,8.32,19.9,17.86,25,15,6.67-3.74-3.39-22.93,7-44,4.24-8.6,6.83-7.27,13-17,10.06-15.86,17.78-42.42,8-53-7.16-7.76-18.84-1.66-47,0-30,1.77-30.57-4.35-71-6C284.76-.26,257.05-1.4,246.36,14.44Z' },
    { value: "M246.36,14.44c-9.22,13.67,4.21,25.21-5,44-6,12.27-22.43,19.68-55,34-25.2,11.07-34.64,13.25-61,46-23.59,11.41-29,16-33,20-16.39,16.69-10.67,27.77-23,46-21,31.08-52.94,21.45-65,49-6.39,14.6-4.93,34.46,5,43s19.82-1.08,42,4c19.42,4.44,20.43,13.7,49,28,22.92,11.46,-80,49.14,47,43,11 -8.38,10.88-37.09,8-79a91,91,0,0,1,3.24-18.19c4.09-13.73,10.65-20.3,16.76-49.81,7.06-34.07,2.57-39.4,11-50,10.72-13.48,22.83-11,63-24,47.51-15.39,42.25-20.65,59-50,24.64,1,57.4,8.58,83,28,11,8.32,19.9,17.86,25,15,6.67-3.74-3.39-22.93,7-44,4.24-8.6,6.83-7.27,13-17,10.06-15.86,17.78-42.42,8-53-7.16 -7.76-18.84-1.66-47,0-30,1.77-30.57-4.35-71-6C284.76-.26,257.05-1.4,246.36,14.44Z" },
    { value: "M246.36,14.44c-9.22,13.67,4.21,25.21-5,44-6,12.27-22.43,19.68-55,34-25.2,11.07-34.64,13.25-61,46-23.59,11.41-29,16-33,20-16.39,16.69-20 30 -23,46 -61 71 -52.94,31.45-65,49-6.39,14.6-4.93,34.46,5,43s19.82-1.08,42,4c19.42,4.44,20.43,43.7,29,28,22.92,11.46,-80,49.14,47,43,11 -8.38,10.88-37.09,8-79a91,91,0,0,1,3.24-18.19c4.09-13.73,10.65-20.3,16.76-49.81,7.06-34.07,2.57-39.4,11-50,10.72-13.48,22.83-11,63-24,47.51-15.39,42.25-20.65,50-50,24.64,1,57.4,8.58,83,28,11,8.32,19.9,17.86,25,15,6.67-3.74-3.39-22.93,7-44,4.24-8.6,6.83-7.27,13-17,10.06-15.86,17.78-42.42,8-53-7.16 -7.76-18.84-1.66-47,0-30,1.77-30.57-4.35-71-6C284.76-.26,257.05-1.4,246.36,14.44Z" },
    { value: 'M246.36,25.66c-9.22,13.67,4.21,25.21-5,44-6,12.27-22.43,19.68-55,34-25.2,11.07-34.64,13.25-61,26-23.59,11.41-29,16-33,20-16.39,16.69-10.67,27.77-23,46-21,31.08-52.94,21.45-65,49-6.39,14.6-4.93,34.45,5,43s19.82-1.08,42,4c19.42,4.44,20.43,13.7,49,28,22.92,11.46,38.27,19.14,47,13,11.9-8.38,3.88-37.09,8-79a91,91,0,0,1,3.24-18.19c4.09-13.73,10.65-20.3,16.76-49.81,7.06-34.07,2.57-39.4,11-50,10.72-13.48,22.83-11,63-24,47.51-15.39,42.25-22.65,59-22,24.64,1,57.4,8.58,83,28,11,8.32,21.9,9.86,27,7,6.67-3.74,7.61-13.93,18-35,4.24-8.6,16.83-12.27,23-22,10.06-15.86-5.22-38.42-15-49-7.16-7.76-24.84-19.66-53-18-30,1.77-35.57,23.65-76,22C273.76,21,257.05,9.82,246.36,25.66Z'},
    { value: 'M246.36,14.44c-9.22,13.67-38.79,9.21-48,28-6,12.27-14.43,7.68-47,22-25.2,11.07-38,4-57,39-9.79,18,1,18-2,35-4.06,23-10.67,27.77-23,46-21,31.08-52.94,21.45-65,49-6.39,14.6-4.93,34.46,5,43s19.82-1.08,42,4c19.42,4.44,20.43,13.7,49,28,22.92,11.46,38.27,19.14,47,13,11.9-8.38,3.88-37.09,8-79a91,91,0,0,1,3.24-18.19c4.09-13.73,10.65-20.3,16.76-49.81,7.06-34.07,2.57-39.4,11-50,10.72-13.48,22.83-11,63-24,47.51-15.39,42.25-22.65,59-22,24.64,1,57.4,8.58,83,28,11,8.32,19.9,17.86,25,15,6.67-3.74-3.39-22.93,7-44,4.24-8.6,6.83-7.27,13-17,10.06-15.86,17.78-42.42,8-53-7.16-7.76-18.84-1.66-47,0-30,1.77-30.57-4.35-71-6C284.76-.26,257.05-1.4,246.36,14.44Z' },
    { value: 'M246.36,14.44c-9.22,13.67,4.21,25.21-5,44-6,12.27-22.43,19.68-55,34-25.2,11.07-34.64,13.25-61,26-23.59,11.41-29,16-33,20-16.39,16.69-10.67,27.77-23,46-21,31.08-52.94,21.45-65,49-6.39,14.6-4.93,34.46,5,43s19.82-1.08,42,4c19.42,4.44,20.43,13.7,49,28,22.92,11.46,38.27,19.14,47,13,11.9-8.38,3.88-37.09,8-79a91,91,0,0,1,3.24-18.19c4.09-13.73,10.65-20.3,16.76-49.81,7.06-34.07,2.57-39.4,11-50,10.72-13.48,22.83-11,63-24,47.51-15.39,42.25-22.65,59-22,24.64,1,57.4,8.58,83,28,11,8.32,19.9,17.86,25,15,6.67-3.74-3.39-22.93,7-44,4.24-8.6,6.83-7.27,13-17,10.06-15.86,17.78-42.42,8-53-7.16-7.76-18.84-1.66-47,0-30,1.77-30.57-4.35-71-6C284.76-.26,257.05-1.4,246.36,14.44Z'}
  ],
  easing: 'linear',
  duration: 40000,
  loop: true
});

var morphing = anime({
  targets: '#essayspath',
  d: [
    { value: 'M187.36,69.74c3.9-11.53,20.3-21.44,14-37-13.16-32.48-79.61-43.32-119-19-43.62,26.93,7.1,44.24-48,98-13.5,13.17-28.59,63.7-33,90-2.84,16.87,2,31.2,5,40,5,14.64,14.4,42.52,42,54,23.09,9.61,50.75-13,66-31,16-18.85,16.68-18.46,28-53,3.36-10.25-7.21-1.57,53-72C210.12,122.47,180.91,88.78,187.36,69.74Z' },
    { value: 'M212.68,92.06c3.9-11.53,1.3-44.44-5-60-13.15-32.48-65.6-42.32-105-18-43.62,26.92-5.9,84.24-61,138-13.5,13.17-34.58,27.7-39,54-2.83,16.87-3,36.2,0,45,5,14.64,16.4,44.52,44,56,23.1,9.61,51.75,4,67-14,16-18.85-11.32-34.46,0-69,3.36-10.25,14.79-19.57,75-90C203.44,116.79,206.23,111.1,212.68,92.06Z' },
    { value: 'M226.36,83.8c3.9-11.53,10.3-30.44,4-46-13.16-32.48-81.61-50.32-121-26-43.62,26.92,2.1,64.24-53,118-13.5,13.17-50.59,50.7-55,77-2.84,16.87,2,45.2,5,54,5,14.63,8.4,34.51,36,46,23.09,9.61,77.75,8,93-10,16-18.85-17.32-48.46-6-83,3.36-10.25,5.79-11.57,66-82C210.12,114.53,219.91,102.84,226.36,83.8Z' },
    { value: 'M225.36,83.8c3.9-11.53,10.3-30.44,4-46-13.16-32.48-81.61-50.32-121-26-43.62,26.92-13.9,82.24-69,136-13.5,13.17-33.59,27.7-38,54-2.84,16.87,2,31.2,5,40,5,14.63,14.4,42.51,42,54,23.09,9.61,54.75,6,70-12,16-18.85-1.32-35.46,10-70,3.36-10.25,5.79-11.57,66-82C209.12,114.53,218.91,102.84,225.36,83.8Z' }

  ],
  easing: 'linear',
  duration: 10000,
  loop: true
});


var morphing = anime({
  targets: '#extrapathtwo',
  d: [
    { value: 'M132.8,5.14c36.79-13.57,107.45,4.1,129,34,14.17,19.65,15.61,55.9-3,76-11.69,12.62-11.15,31.35-65,45-77.52,19.64-119.23-6-128,6-17.53,23.93-16.08,75.3,0,85,23.2,14,73.08-59.79,116-46,20.41,6.55,42,52.05,45,70,5.94,36.07-33.87,79.45-66,91-50.56,18.17-121.43-26.19-142-67-11.54-22.89,9.91-37.34,2-120-2.87-30-13.08-49.29-18-79-4-24.37-3-39.74,5-47,10.71-9.72,26.39-2.5,58-3C92.25,49.71,104.15,15.71,132.8,5.14Z' },
    { value: 'M142.09,25.71c36.79-13.57,126.45-41.9,148-12,14.16,19.65,2.61,62.9-16,83-11.69,12.62-19.15,17.36-73,31-77.52,19.64-104.23-6-113,6-17.53,23.93-19.08,109.3-3,119,23.2,14,80.08-52.79,123-39,20.41,6.55,41,18,44,36,5.94,36.07-59.87,64.45-92,76-50.56,18.17-119.43,6.81-140-34-11.54-22.89-11.09-31.34-19-114-2.87-30,5.92-56.29,1-86-4-24.37,7-41.74,15-49,10.71-9.72,29.39,5.5,61,5C104.53,47.29,113.44,36.28,142.09,25.71Z'}
  ],
  easing: 'linear',
  direction: 'alternate',
  duration: 7400,
  loop: true
});

var morphing = anime({
  targets: '.home-path',
  d: [
    { value: 'M92.1,1C84,0.3,61,-1.69,42.1,13C33.83,19.43,29.480000000000004,27.7,21.1,44C5.94,73.49,-1.79,88.52,1.1,108C1.35,109.65,6.210000000000001,139.84,26.1,147C39.38,151.77,46.69,141.71,68.1,136C114.69999999999999,123.55,143.95,154.15,165.1,136C176.57999999999998,126.14,177.1,109.31,177.1,108C177.28,96.6,171.75,90.9,164.1,76C148.65,45.9,156.5,40.49,145.1,26C127.87,4.08,98.22,1.52,92.1,1Z' }
    ],
  easing: 'linear',
  direction: 'alternate',
  duration: 3000,
  loop: true
});
