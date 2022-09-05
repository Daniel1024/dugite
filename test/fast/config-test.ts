import { GitProcess } from '../../lib'
import * as os from 'os'

describe('config', () => {
  it('sets http.sslBackend on Windows', async () => {
    if (process.platform === 'win32') {
      const result = await GitProcess.exec(
        ['config', '--system', 'http.sslBackend'],
        os.homedir()
      )
      expect(result.stdout.trim()).toBe('schannel')
    }
  })

  it('unsets http.sslCAInfo on Windows', async () => {
    if (process.platform === 'win32') {
      const result = await GitProcess.exec(
        ['config', '--system', 'http.sslCAInfo'],
        os.homedir()
      )
      expect(result.stdout.trim()).toBe('')
    }
  })
})
