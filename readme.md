# Web Template
A starter template for web development projects, to my liking.

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

# What to change?
Of course, feel free to alter anything to your liking, but these are just plain wrong for other projects:
- Lines 1-12 (inclusive) in `package.json`. In particular, the `license` field may have legal ramifications.
- The readme file
- The .git folder
