# A simple way to get started with Rust and WebAssembly

## Before we begin...
This tool assumes you already have `rustup` installed.
You can check with:
```bash
rustup --version
```
If you don't have `rustup`, [install it](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html) before continuing any further.

## Let's get going!
```bash
git clone https://github.com/kylejlin/wasm-rust-quickstart.git
cd wasm-rust-quickstart
npm run setup
```

Open up [localhost:8080](http://localhost:8080) in your browser.
You should see "Hello world! 42 + 1 = 43".

## Workflow scripts
```bash
npm run serve # Starts Webpack Development Server (hot reloading JS)
npm run build-debug # Compiles Rust code for debug
npm run build-release # Compiles Rust code for release
```
