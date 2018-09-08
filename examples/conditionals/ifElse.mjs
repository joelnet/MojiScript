import log from 'joelscript/console/log'
import ifElse from 'joelscript/core/ifElse'
import pipe from 'joelscript/core/pipe'
import run from 'joelscript/core/run'

const dependencies = {
  log
}
const state = [1, 2, 3]

// hasOrders :: Array -> Boolean
const hasOrders = ({ length }) => length > 0

// orderCountText :: Array -> OrdersString
const orderCountText = ({ length }) => `${length} orders`

// noOrderCountText :: * -> OrdersString
const noOrderCountText = () => 'No Orders'

// ifHasOrders :: Function -> Function
const ifHasOrders = ifElse (hasOrders)

// getOrdersText :: (a -> b) -> (a -> b) -> OrdersString
const getOrdersText = ifHasOrders (orderCountText) (noOrderCountText)

// main :: Number -> String
const main = ({ log }) => pipe ([
  getOrdersText,
  log
])

run({ dependencies, state, main }) //=> 'NO'
