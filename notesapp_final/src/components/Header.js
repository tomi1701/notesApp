import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			{/* <h1>Notes</h1> */}
			<h1>Заметки</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				{/* Toggle Mode */}
				Переключить режим
			</button>
		</div>
	);
};

export default Header;