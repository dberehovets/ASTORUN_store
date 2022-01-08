import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getProductsByIds } from '../../api/requests';
import { CART_ITEMS_STORAGE_KEY } from '../../constants/cart.constants';
import { ERROR_NOTIFICATION } from '../../constants/notifications.constants';
import LocalStorageService from '../../services/local-storage.service';
import { TStoredCartItems } from '../../types/storage.types';
import { addNotification } from '../notifications/notifications.actions';
import { loadCartFailureAction, loadCartSuccessAction } from './cart.actions';
import { LOAD_CART_START } from './cart.types';
import { formCartItems } from './cart.utils';

function* loadCart() {
  try {
    const storedCartItems = LocalStorageService.getItem<TStoredCartItems>(
      CART_ITEMS_STORAGE_KEY
    );

    if (!storedCartItems || !storedCartItems.length) {
      yield put(loadCartSuccessAction({}));
      return;
    }

    console.log('storedCartItems:', storedCartItems);
    const productIds = storedCartItems.map(({ id }) => id);
    // eslint-disable-next-line
    // @ts-ignore
    const uniqProductIds = [...new Set(productIds)];

    const response = yield getProductsByIds(uniqProductIds);

    const products = response.data;

    console.log('products:', products);
    const cartItems = formCartItems(storedCartItems, products);

    console.log('cartItems:', cartItems);
    yield put(loadCartSuccessAction(cartItems));
  } catch (e) {
    yield put(loadCartFailureAction(e));
    yield put(
      addNotification({
        type: ERROR_NOTIFICATION,
        message: e.message,
      })
    );
  }
}

function* onLoadCartStart() {
  yield takeEvery(LOAD_CART_START, loadCart);
}

export default function* cartSagas(): Generator {
  yield all([call(onLoadCartStart)]);
}
