import React from 'react';

const Categories = ({items, onClickItem}) => {
	return (
		<div>
			<div className="categories">
				<ul>
					<li className="active">Все</li>
					{
						items.map((name, index) => <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>{name}</li>)
					}
				</ul>
			</div>
		</div>
	);
};

export default Categories;