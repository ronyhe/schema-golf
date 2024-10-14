# Mark Watney ASCII Simulator

>Twenty-six letters plus my question card would be twenty-seven cards around the lander. 
>Each one would only get 13 degrees of arc. Even if JPL points the camera perfectly, there’s a good chance I won’t know which letter they meant.
>
>So I’ll have to use ASCII. That’s how computers manage characters. Each character has a numerical code between 0 and 255. 
>Values between 0 and 255 can be expressed as 2 hexadecimal digits. By giving me pairs of hex digits, they can send any character they like, 
>including numbers, punctuation, etc.
>
>How do I know which values go with which characters? 
>Because Johanssen’s laptop is a wealth of information. I knew she’d have an ASCII table in there somewhere. All computer geeks do.
>
>So I’ll make cards for 0 through 9, and A through F. That makes 16 cards to place around the camera, 
>plus the question card. Seventeen cards means over 21 degrees each. Much easier to deal with.
>
>Time to get to work!
>
>*Spell with ASCII. 0–F at 21-degree increments. Will watch camera starting 11:00 my time. 
>When message done, return to this position. Wait 20 minutes after completion to take picture (so I can write and post reply). 
>Repeat process at top of every hour.*

Weir, A. (2011) The Martian. New York: Crown Publishing Group.

# Bundler - Parcel
Low config is a win here for me. I use this template for small projects, so I'm not worried about hitting a performance wall.

# Testing - Node Test Runner
I'm using the native node test runner.
Sadly, I needed hack to get the `expect` assertion library to work. You'll find it in the `postinstall` script.
Hopefully, the hack won't be needed when https://github.com/jestjs/jest/pull/15288 is merged into Jest.

# Linting - ESLint + Prettier
No real competition here

# Prerequisites
- Node.js, version specified in `.nvmrc`
- jq and sponge (Hopefully, temporary, see Testing)
