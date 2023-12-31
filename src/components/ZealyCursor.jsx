import React, { useContext } from 'react';
import styled from 'styled-components';
import useMousePosition from '../hooks/useMousePosition';
import { MouseContext } from '../context/mouse-context';

const Root = styled.div`
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
  }

  svg {
    width: 26px;
    height: 26px;
  }

  ${props =>
    props.hovered &&
    `
    svg {
      path:last-child {
        fill: #f65cb6;
      }
    }
  `}
`;

const ZealyCursor = () => {
  const { cursorType } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  return (
    <Root hovered={cursorType ? 'hovered' : null}>
      <div className="cursor" style={{ top: `${y}px`, left: `${x}px` }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="Logo" viewBox="0 0 84 80">
          <path
            fill="#fff"
            fillRule="evenodd"
            d="m5.377 7.242-3.166-.1676-.0144 3.1974-.0016.6665c-.001.5192-.0022 1.4155-.0035 2.9256-.0025 3.02-.005 8.4967-.005 18.3244v1.2624l3.7513 3.7833a360.4629 360.4629 0 0 1-4.477 2.7949l-1.449.8901L0 61.9962l17.303 17.4619 1.1359.0749c21.2314 1.3987 43.0665-.1532 63.5247-7.2715L84 71.553V46.2255l-4.4259-4.4637a265.1705 265.1705 0 0 0 2.2534-2.2698l.873-.8905v-1.2524c0-.8644.0026-5.3914.0051-9.7042l.0058-9.6709L64.8894 0l-1.7739.5993C44.6964 6.8223 24.941 8.278 5.3769 7.242Zm58.6985-3.7528 15.6132 15.7464s-.0101 16.3822-.0101 18.1135a260.7456 260.7456 0 0 1-2.2414 2.2576 319.828 319.828 0 0 1-2.1613 2.1303l5.7022 5.7509v21.8925c-19.9662 6.9472-41.373 8.4928-62.3422 7.1113L3.0226 60.7351l.0101-18.1032a362.0065 362.0065 0 0 0 7.7051-4.867l-5.5294-5.5766c0-10.4314.0028-15.9597.0055-18.8511.0024-2.5566.0046-3.0516.0046-3.0516 1.0063.0532 2.0135.1 3.0215.14 18.825.7472 37.9022-.8775 55.8355-6.9364Z"
            clipRule="evenodd"
          />
          <path
            fill="#0D0D0D"
            fillRule="evenodd"
            d="M5.2184 10.2855c19.8004 1.0485 39.9635-.413 58.857-6.7963l15.6133 15.7464s-.0101 16.3822-.0101 18.1135c-1.453 1.482-2.9296 2.949-4.4027 4.3879l5.7021 5.7509v21.8925c-19.9661 6.9471-41.373 8.4928-62.3422 7.1113L3.0226 60.7351l.01-18.1032a360.2294 360.2294 0 0 0 7.7052-4.867l-5.5294-5.5766c0-19.6546.01-21.9028.01-21.9028Z"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M73.6348 27.2004v8.7773c-9.7407 9.3666-19.4813 17.5344-29.2119 24.8184 10.1738-.6806 20.3374-2.3162 30.5213-5.2826v9.712c-14.0419 4.1042-28.0736 5.6585-42.1054 5.6585-2.7197 0-5.4394-.0609-8.1591-.1727v-8.7774c9.7406-6.2478 19.4813-13.1457 29.2119-21.0392-7.0008.9041-14.0017 1.2902-21.0025 1.2902-2.0146 0-4.0191-.0305-6.0337-.0915v-9.712a195.056 195.056 0 0 0 5.9734.0914c13.5986 0 27.1972-1.4527 40.7959-5.2826l.0101.0102Z"
          />
        </svg>
      </div>
    </Root>
  );
};

export default ZealyCursor;
