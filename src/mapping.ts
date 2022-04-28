import {log} from '@graphprotocol/graph-ts'
import {PoolAdded} from '../generated/Contract/Registry'
export function handlePoolAdded(event: PoolAdded): void {
  // getOrCreatePool(event.params.pool, event)
  log.info("----------------Step into handlePoolAdded-----------------------",[])
}


