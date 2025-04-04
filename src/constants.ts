import { ethers } from "ethers";
import { TokenConfig } from "./types";

export enum SupportedChainId {
    BINANCE_SMART_CHAIN = 56
}

export type AddressMap = {
    [chainId: number]: string;
};

export const ASTHERUS_ADDRESS: AddressMap = {
    [SupportedChainId.BINANCE_SMART_CHAIN]: '0x128463a60784c4d3f46c23af3f65ed859ba87974'
};

export const TOKENS: TokenConfig[] = [
    {
        symbol: 'USDT',
        address: '0x55d398326f99059fF775485246999027B3197955',
        decimals: 18,
        logo: '/usdt-icon.svg',
        quickAmounts: ['1', '5', '10', '20']
    },
    {
        symbol: 'BNB',
        address: ethers.ZeroAddress,
        decimals: 18,
        logo: '/bnb-logo.png',
        quickAmounts: ['0.01', '0.05', '0.1', '0.2']
    }
];