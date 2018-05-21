import { add_one } from './wasm_rust_quickstart'

document.getElementsByTagName('p').textContent += ` 42 + 1 = ${add_one(42)}`;

// Congratulations!
// You just performed that mind-boggling computation with a Rust function :)
