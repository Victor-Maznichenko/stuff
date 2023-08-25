import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const Sidebar: FC = () => {
  const categories = useSelector((state: RootState) => state.categories.list).slice(0,10);

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <nav className={styles.nav}>
        <ul>
          {
            categories.map((category, index) => (
                <li className={styles.item} key={index}>
                  <NavLink className={({isActive}) => `${styles.navlink} ${isActive ? styles.active : ''}`} id={'cat' + index} to={'/category/'+category.id}>{category.name}</NavLink>
                </li>
              ))
          }
        </ul>
      </nav>
      <div className={styles.bottom}>
        <Link to={'/'}>Help</Link>
        <Link to={'/'} className={styles.terms}>Terms & Conditions</Link>
      </div>
    </aside>
  )
}

export default Sidebar