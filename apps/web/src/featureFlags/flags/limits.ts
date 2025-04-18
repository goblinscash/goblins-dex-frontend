import { BaseVariant, FeatureFlag, useBaseFlag } from '../index'

export function useLimitsEnabledFlag(): BaseVariant {
  return useBaseFlag(FeatureFlag.limitsEnabled)
}

export function useLimitsEnabled(): boolean {
  return false;
  // return useLimitsEnabledFlag() === BaseVariant.Enabled
}
