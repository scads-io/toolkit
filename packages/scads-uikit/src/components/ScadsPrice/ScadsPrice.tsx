import React from "react";
import styled from "styled-components";
import Skeleton from "../Skeleton/Skeleton";

export interface Props {
  scadsPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const TokenIcon = styled.img`
  margin: 5px;
  height: 30px;
`

const TokenText = styled.text`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  margin-right: 5px;
`

const ScadsPrice: React.FC<Props> = ({ scadsPriceUsd}) => {
  return scadsPriceUsd ? (
    <PriceLink
      href="/mint/scads"
      target="_blank">
      <TokenIcon src={"/images/tokens/Scads.png"} />
      <TokenText>{`$${scadsPriceUsd.toFixed(3)}`}</TokenText>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(ScadsPrice);
