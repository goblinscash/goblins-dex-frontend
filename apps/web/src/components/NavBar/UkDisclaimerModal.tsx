import { Trans } from '@lingui/macro'
import { ButtonEmphasis, ButtonSize, ThemeButton } from 'components/Button'
import Column from 'components/Column'
import Modal from 'components/Modal'
import { X } from 'react-feather'
import { useCloseModal, useModalIsOpen } from 'state/application/hooks'
import { ApplicationModal } from 'state/application/reducer'
import styled from 'styled-components'
import { ButtonText, ThemedText } from 'theme/components'

import { bannerText } from './UkBanner'

const Wrapper = styled(Column)`
  padding: 8px;
  
`

const ButtonContainer = styled(Column)`
  padding: 8px 12px 4px;
`

const CloseIconWrapper = styled(ButtonText)`
  display: flex;
  color: ${({ theme }) => theme.neutral1};
  justify-content: flex-end;
  padding: 8px 0px 4px;

  :focus {
    text-decoration: none;
  }
`

const StyledThemeButton = styled(ThemeButton)`
  width: 100%;
  background: #0f0!important;
  color: #000;
`

export function UkDisclaimerModal() {
  const isOpen = useModalIsOpen(ApplicationModal.UK_DISCLAIMER)
  const closeModal = useCloseModal()


  return (
    <Modal isOpen={isOpen} onDismiss={closeModal}>
      <Wrapper gap="md">
        <CloseIconWrapper onClick={() => closeModal()}>
          <X size={24} />
        </CloseIconWrapper>
        <Column gap="sm">
          <ThemedText.HeadlineLarge padding="0px 8px" fontSize="24px" lineHeight="32px">
            <Trans>Our Product is unavailable in your location</Trans>
          </ThemedText.HeadlineLarge>
          <ThemedText.BodyPrimary padding="8px 8px 12px" lineHeight="24px">
          
                <p className="m-0 themeClr py-2 ">
                  Sorry, our product are unavailable in your location
                </p>
          </ThemedText.BodyPrimary>
        </Column>
        <ButtonContainer gap="md">
          <StyledThemeButton size={ButtonSize.large} emphasis={ButtonEmphasis.medium} className='commonBtn' onClick={() => closeModal()}>
          Agree and Continue
          </StyledThemeButton>
        </ButtonContainer>
      </Wrapper>
    </Modal>
  )
}
