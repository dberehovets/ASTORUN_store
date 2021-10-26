import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useRouteMatch } from 'react-router-dom';
import { ICollectionItem } from '../../redux/collections/collections.types';
import './app-collection-card.styles.scss';

interface ICollectionItemProps {
  item: ICollectionItem;
}

const AppCollectionCard = ({
  item,
}: ICollectionItemProps): React.ReactElement => {
  const { name, image } = item;
  const match = useRouteMatch();
  const redirectUrl = `${match.path}/${name}`;
  const { t } = useTranslation();

  return (
    <Link to={redirectUrl}>
      <div className="collection-item">
        <div
          className="collection-item__background"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="collection-item__content">
          <h4 className="collection-item__title">{t(`collections.${name}`)}</h4>
          <div className="collection-item__subtitle">
            {t('actions.shop_now')}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCollectionCard;
