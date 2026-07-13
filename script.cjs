const fs = require('fs');
let code = fs.readFileSync('src/components/MusicPlayer.tsx', 'utf8');
code = code.replace(
  /<button onClick={toggleMute}/,
  '<button onClick={(e) => { e.stopPropagation(); toggleMute(); }}'
);
code = code.replace(
  /<input type="range"/,
  '<input onClick={(e) => e.stopPropagation()} type="range"'
);
code = code.replace(
  /<button \n          onClick={togglePlay}/,
  '<button \n          onClick={(e) => { e.stopPropagation(); togglePlay(); }}'
);
fs.writeFileSync('src/components/MusicPlayer.tsx', code);
