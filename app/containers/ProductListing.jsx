import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/about';


const cx = classNames.bind(styles); 

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const ProductListing = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>Product Listing Page</h1>
      <div className={cx('description')}>
			<div>Electronics products
			<ul>
			<li>Laptop</li>
			<li>ipad</li>
			<li>iphone</li>
			<li>Tablets</li>
			</ul></div>
	  
			<div>Baby products
			<ul>
			<li>Bathing</li>
			<li>Sceen care</li>
			<li>Grooming</li>
			<li>Gift packs</li>
			</ul></div>
      </div>

    </div>
  );
};

export default ProductListing;
