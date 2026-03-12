// - Event Loop वो mechanism है जो synchronous और asynchronous code को manage करता है ताकि JS “non‑blocking” लगे।
// - Event Loop लगातार check करता है:
// - अगर Call Stack खाली है → Callback Queue से function उठाकर Stack में डाल देता है।
// - इससे asynchronous code भी सही समय पर execute होता है।
// - Event Loop = JS का traffic controller
