import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useAppSelector } from "../../hooks";
import { ActionTypes } from "../../state/action-types";
import { Table } from "../tables";
import { TableWrapper } from "../wrappers";
import { VscChromeClose } from "react-icons/vsc";
import { primary } from "../../styles/colors";

interface IModal {
  modalAnimation: boolean;
}

const Modal = styled.div<IModal>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${primary};
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: -10;
  opacity: 0;
  transform: translateX(100vw);
  transition: all 0.3s ease-in-out;
  ${({ modalAnimation }) =>
    modalAnimation &&
    css`
      opacity: 1;
      z-index: 50;
      transform: translateX(0);
    `}
`;

const CloseModal = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 1.5rem;
  color: #fff;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  &:hover {
    color: #ddd;
  }
`;

export const CovidModal = (): JSX.Element => {
  const modalStatus = useAppSelector((state) => state.modals.covidModal);
  const dispatch = useDispatch();

  const closeModal = useCallback(() => {
    dispatch({ type: ActionTypes.TOGGLE_MODAL });
  }, []);

  const memoModal = useMemo(() => {
    return (
      <Modal modalAnimation={modalStatus}>
        <CloseModal onClick={closeModal}>
          <VscChromeClose size={30} color="#000" />
        </CloseModal>
        <TableWrapper>
          <Table />
        </TableWrapper>
      </Modal>
    );
  }, [modalStatus]);

  return <>{memoModal}</>;
};
