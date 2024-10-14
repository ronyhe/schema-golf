# Building
Parcel's minimal config effort is a big plus for such a small project

# GUI
https://mui.com/

# Testing - Node Test Runner
I'm using the native node test runner.
Sadly, I needed hack to get the `expect` assertion library to work. You'll find it in the `postinstall` script.
Hopefully, the hack won't be needed when https://github.com/jestjs/jest/pull/15288 is merged into Jest.

# Linting - ESLint + Prettier
No real competition here

# Prerequisites
- Node.js, version specified in `.nvmrc`
- jq and sponge (Hopefully, temporary, see Testing)
