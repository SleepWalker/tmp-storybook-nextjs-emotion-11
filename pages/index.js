import Head from 'next/head';
import styles from '../styles/Home.module.css';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledButton = styled.button`
  background: red;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <StyledButton>Hello world</StyledButton>
      <div
        css={css`
          background: orange;
        `}
      >
        Hello world 2
      </div>
    </div>
  );
}
