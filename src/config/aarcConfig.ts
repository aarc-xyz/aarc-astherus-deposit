import {
  FKConfig,
  ThemeName,
  TransactionSuccessData,
  TransactionErrorData,
  SourceConnectorName,
} from "@aarc-xyz/fundkit-web-sdk";
import { ASTHERUS_ADDRESS, SupportedChainId } from "../constants";

export const aarcConfig: FKConfig = {
  appName: "Aster x Aarc",
  module: {
    exchange: {
      enabled: true,
    },
    onRamp: {
      enabled: true,
      onRampConfig: {},
    },
    bridgeAndSwap: {
      enabled: true,
      fetchOnlyDestinationBalance: false,
      routeType: "Value",
      connectors: [SourceConnectorName.ETHEREUM],
    },
  },
  destination: {
    contract: {
      contractAddress: ASTHERUS_ADDRESS[SupportedChainId.BINANCE_SMART_CHAIN],
      contractName: "AsterDeposit",
      contractPayload: "0x", // This will be updated dynamically
      contractGasLimit: "300000", // Standard gas limit, can be adjusted if needed
    },
    walletAddress: ASTHERUS_ADDRESS[SupportedChainId.BINANCE_SMART_CHAIN],
    chainId: 56, // BSC chain ID
  },
  appearance: {
    roundness: 42,
    theme: ThemeName.DARK,
  },
  apiKeys: {
    aarcSDK: import.meta.env.VITE_AARC_API_KEY,
  },
  events: {
    onTransactionSuccess: (data: TransactionSuccessData) => {
      console.log("Transaction successful:", data);
    },
    onTransactionError: (data: TransactionErrorData) => {
      console.error("Transaction failed:", data);
    },
    onWidgetClose: () => {
      console.log("Widget closed");
    },
    onWidgetOpen: () => {
      console.log("Widget opened");
    },
  },
  origin: window.location.origin,

}; 