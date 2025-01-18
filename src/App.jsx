import { useState } from 'react';
import styles from './index.css';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueVaild, setIsValueVaild] = useState(null);

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение.');
		if (promptValue.length > 3) {
			setValue(promptValue);
			setError('');
			setIsValueVaild(true);
		} else {
			setError('Введенное значение меньше трех символов.');
			setValue(promptValue);
			setIsValueVaild(false);
		}
	};

	const onAddButtonClick = () => {
		if (isValueVaild === true) {
			setList([...list, { id: Date.now(), value: value }]);
			setValue('');
			setError('');
		}
	};
	console.log(list);

	return (
		<>
			<div className="app">
				<h1 className={styles['page-heading']}>Ввод значения</h1>
				<p className={styles['no-margin-text']}>
					Текущее значение <code>value</code>: "
					<output className={styles['current-value']}>{value}</output>"
				</p>
				<div className="error">{error}</div>
				<div className={styles['buttons-container']}>
					<button className="button" onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button className="button" disabled={!isValueVaild} onClick={onAddButtonClick}>
						Добавить в список
					</button>
				</div>
				<div className={styles['list-container']}>
					<h2 className={styles['list-heading']}>Список:</h2>
					<p className={styles['no-margin-text']}>
						{list.length ? '' : 'Нет добавленных элементов'}
					</p>
					<ul className="list">
						<li className={styles['list-item']}>{list.map((item) => item.value + ', ')}</li>
					</ul>
				</div>
			</div>
			<p className={styles['read-the-docs']}>Click on the Vite and React logos to learn more</p>
		</>
	);
};
