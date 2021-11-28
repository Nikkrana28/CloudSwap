import React from 'react'
import {  useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import styled from "styled-components";

const ConnectWalletButton = (props) => {

  const Button = styled.button`
  background-color: #c6a5ff;
  cursor: pointer;
  border:none;
  outline: none;
  text-align: center;
  font-weight: 300;
  border-radius: 10px;
  padding: 10px 24px;
  text-size: 50px;
  color: white;
  width: 100%;
  font-size : 17px;
  text-decoration: none;

  :hover{
    border-radius: 10px;
    background-color: #7969d3;
    color: black;
    box-shadow: 10px 10px 17px 0px rgba(0,0,0,0.15);
  }
`;



  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {t('Connect Wallet')}
    </Button>
  )
}

export default ConnectWalletButton
