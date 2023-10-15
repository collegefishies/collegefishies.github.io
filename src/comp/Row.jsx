import { css } from 'styled-components';
import styled from 'styled-components';

const row = styled.div.attrs({
  className: 'row'
})

export default function Row(props) {
  return <row>{props.children}</row>;
}