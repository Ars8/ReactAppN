import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Categories, SortPopup, NailBlock, NailLoadingBlock } from '../components';

import {setCategory, setSortBy} from '../redux/actions/filters';
import { fetchNails } from '../redux/actions/nails';

const categoryNames = ['Гель-лаки', 'Базы', 'Топы', 'Наборы', 'Кошачий глаз', 'Лаки'];
const sortItems = [
	{name: 'популярности', type: 'popular', order: 'desc'}, 
	{name: 'цене', type: 'price', order: 'desc'}, 
	{name: 'алфавиту', type: 'name', order: 'asc'}];

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ nails }) => nails.items);
	const isLoaded = useSelector(({ nails }) => nails.isLoaded);
	const {category, sortBy} = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchNails(sortBy, category));
	  }, [category, sortBy]);

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, []);

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type));
	}, []);

    return (
        <div className="container">
			<div className="content__top">
				<Categories
				activeCategory={category}
				onClickCategory={onSelectCategory}
				items={categoryNames}
				/>
				<SortPopup 
					activeSortType={sortBy.type} 
					items={sortItems} 
					onClickSortType={onSelectSortType} 
				/>
			</div>
			<h2 className="content__title">Все товары</h2>
			<div className="content__items">
				{
					isLoaded 
					? items.map(obj => <NailBlock key={obj.id} {...obj} />) 
					: Array(12)
						.fill(0)
						.map((_, index) => <NailLoadingBlock key={index}/>)
				}
				
			</div>
		</div>
      
    )
};

export default Home;