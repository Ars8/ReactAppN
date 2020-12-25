import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, NailBlock } from '../components';

import {setCategory} from '../redux/actions/filters';

const categoryNames = ['Гель-лаки', 'Базы', 'Топы', 'Наборы', 'Кошачий глаз', 'Лаки'];
const sortItems = [
	{name: 'популярности', type: 'popular'}, 
	{name: 'цене', type: 'price'}, 
	{name: 'алфавиту', type: 'alphabet'}];

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ nails }) => nails.items);

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

    return (
        <div className="container">
			<div className="content__top">
				<Categories
				onClickItem={onSelectCategory}
				items={categoryNames}
				/>
				<SortPopup items={sortItems} />
			</div>
			<h2 className="content__title">Все товары</h2>
			<div className="content__items">
				{
					items && items.map(obj => <NailBlock key={obj.id} {...obj} />)
				}
				
			</div>
		</div>
      
    )
};

export default Home;