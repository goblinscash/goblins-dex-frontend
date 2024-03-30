import { BaseVariant, FeatureFlag, useBaseFlag } from '../index'

export function useSendEnabledFlag(): BaseVariant {
  return useBaseFlag(FeatureFlag.sendEnabled)
}

export function useSendEnabled(): boolean {
  return false;
  // return useSendEnabledFlag() === BaseVariant.Enabled
}
