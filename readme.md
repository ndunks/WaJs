# WhatsApp Web using NodeJS

NodeJS implementation from great research [sigalor/whatsapp-web-reveng](https://github.com/sigalor/whatsapp-web-reveng).

## Start Step
- First send init command
- if: have stored `browserToken`, send login command (may got `challenge` command, handle it)
- else: Generate QR Code from `ref` and `publicKey`
- Waiting string packet that 's' prefixed and have `Conn`, mean Session is OK
- WA Server will send some data, `Blocklist`,`Stream`,`Props`
- After it, will got binary (encrypted message)
- two `preempt` contains contacts and chat lists
