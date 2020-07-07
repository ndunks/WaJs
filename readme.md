# WhatsApp Web using NodeJS

NodeJS implementation from great research [sigalor/whatsapp-web-reveng](https://github.com/sigalor/whatsapp-web-reveng).

This project is **not for normal-user**. at least you must know JavaScript/TypeScript dialect :-).

## Quick Start

- Install depency `yarn` / `npm`
- Transpile to js: `npm run tsc` or `yarn run tsc`
- Run: `node build-test/test/example.js --filter autoreply`
- scan displayed QR Code on terminal with your WhatsApp app
- With other WhatsApp number, try sending message to your WhatsApp number
- The message should be autoreplied

    **NOTE:** All unread message on your inbox will be auto replied too :-)

## How to Dev

first, you need to install depency with `yarn` or `npm`. then `yarn dev` or `npm run dev`.

    For you that have a time, I hope you send me PR to make it better.

## TODOs

- [X] Authentication QR Code
- [X] Resume Session (takeover)
- [X] Reading initial WS message
- [X] Sending presence state
- [X] Sending Message
- [X] Listen when got new message
- [X] Get All unread message
- [X] Mark read
- [X] Auto reply
- [ ] Handle account take over on the fly. Re-take over or exit.
- [ ] Send media (image/video)
- [X] Run specific test by specifying on argument
- [X] If test require a WA Number, make it dynamic on argument or ( unindexed ) file.
- [ ] Make it like a library, easy to use with just installing as NPM Package (Thats mean we need a bundling system)

## Step Explanation
- First send init command
- if: have stored `browserToken`, send login command (may got `challenge` command, handle it)
- else: Generate QR Code from `ref` and `publicKey`
- Waiting string packet that 's' prefixed and have `Conn`, mean Session is OK
- WA Server will send some data, `Blocklist`,`Stream`,`Props`
- After it, will got binary (encrypted message)
- two `preempt` contains contacts and chat lists
