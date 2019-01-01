import {default as xdr} from "../generated/stellar-xdr_generated";
 
/**
  * This operation generates the liquidation.
  * @function
  * @alias Operation.liquidation
  * @param {object} [opts]
  * @param {string} [opts.source] - The optional source account.
  * @returns {xdr.LiquidationOp}
  */
export const liquidation = function(opts={}) {
    let opAttributes = {};
    opAttributes.body = xdr.OperationBody.liquidation();
    this.setSourceAccount(opAttributes, opts);
    return new xdr.Operation(opAttributes);
};