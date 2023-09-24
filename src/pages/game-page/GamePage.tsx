import useInitSimpleEmoji from '../../hooks/InitSimpleEmoji';
import Keyboard from './keyboard/Keyboard';
import { useAppSelector } from '../../hooks/redux';

function GamePage(): JSX.Element {
	useInitSimpleEmoji();
	const { emojiList, isLoading } = useAppSelector(state => state.simpleEmojiReducer);
	return <div>
		{isLoading ? 'loading...' : <Keyboard emojiList={emojiList}/>}
	</div>;
};

export default GamePage;