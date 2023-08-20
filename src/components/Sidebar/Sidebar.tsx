import { FC, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';

import styles from './SIdebar.module.scss';
import { RootState, useStoreDispatch } from '../../redux/store';
import { getCategories } from '../../redux/categories';
import { useSelector } from 'react-redux';
// import { ROUTES } from '../../utils/routes';

const Sidebar: FC = () => {
  const dispatch = useStoreDispatch();
  const categories = useSelector((state: RootState) => state.categories.list)

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])


  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Categories</h3>
      <nav className={styles.nav}>
        <ul>
          {
            categories.map((category, index) => {
              return (
                <li className={styles.item}>
                  <NavLink className={({isActive}) => `${styles.navlink} ${isActive ? styles.active : ''}`} key={index} id={'cat' + category.id} to={'/categories/'+category.id}>{category.name}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
      <div className={styles.bottom}>
        <Link to={'/'} className={styles.help}>Help</Link>
        <Link to={'/'} className={styles.terms}>Terms & Conditions</Link>
      </div>
    </aside>
  )
}

export default Sidebar