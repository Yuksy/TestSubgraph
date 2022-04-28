import {log} from '@graphprotocol/graph-ts'
import {PoolAdded} from '../generated/Contract/Registry'
import {TokenExchange,AddLiquidity,RemoveLiquidity} from '../generated/UnstablePool/StableSwap'
export function handlePoolAdded(event: PoolAdded): void {
  // getOrCreatePool(event.params.pool, event)
  log.info("----------------Step into handlePoolAdded-----------------------",[])
}

export function handleUnstableTokenExchange(event: TokenExchange): void {
  // getOrCreatePool(event.params.pool, event)
  log.info("----------------Step into handleUnstableTokenExchange-----------------------",[])
}

export function handleAddLiquidity(event: AddLiquidity): void {
  // getOrCreatePool(event.params.pool, event)
  log.info("----------------Step into handleAddLiquidity-----------------------",[])
}

export function handleRemoveLiquidity(event: RemoveLiquidity): void {
  // getOrCreatePool(event.params.pool, event)
  log.info("----------------Step into handleRemoveLiquidity-----------------------",[])
}


