import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledButton = styled.button`
  background: red;
`;

export function Button() {
  return (
    <div>
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
