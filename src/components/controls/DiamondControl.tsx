import styled from 'styled-components';
import DigitProvider from '../digits/DigitProvider';
import Icon, { IconSizeEnum } from '../icons/Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface DiamondProps {
	size: IconSizeEnum;
	count: number;
	onClick?: () => void;
}

function DiamondControl({ size, count, ...props }: DiamondProps) {
	return (
		<Wrapper {...props}>
			<Icon icon="DIAMOND_ICON" size={size}/>
			<DigitProvider style={{ marginLeft: '1vh' }} size={size} n={count} isBold={false}/>
		</Wrapper>
	);
}

export default DiamondControl;