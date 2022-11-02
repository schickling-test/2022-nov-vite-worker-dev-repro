import sqlite3InitModule from 'sqlite-wasm-esm'

const sqlite3Promise = sqlite3InitModule()

self.addEventListener('message', async () => {
  const sqlite3 = await sqlite3Promise
  const opfsDb = new sqlite3.opfs!.OpfsDb('my-db', 'c')

  const resultRows = []
  opfsDb.exec({ sql: 'SELECT 1', rowMode: 'object', resultRows })

  self.postMessage(`SQL result:` + JSON.stringify(resultRows, null, 2))
})
