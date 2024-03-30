import { BaseVariant, FeatureFlag, useBaseFlag } from '../index'

export function useInfoExploreFlag(): BaseVariant {
  return useBaseFlag(FeatureFlag.infoExplore)
}

export function useInfoExplorePageEnabled(): boolean {
  return false
  // return useInfoExploreFlag() === BaseVariant.Enabled
}
