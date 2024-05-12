import { useDispatch } from 'react-redux'
import './cart-tile.css'
import { removeFromCart } from '../../store/slices/cart-slice';

export default function CartTile({cartItem}){
	const dispatch = useDispatch();
	function hRemoveFromCart(){
		dispatch(removeFromCart(cartItem.id));
	}
		//리덕스의 함수를 사용하기 위해선 useDispatch()
		//리덕스(store)의 데이터를 사용하기 위해선 useSelector()
	return(
		<div className='tile-container'>
			<div className='flex-padding'>
				 <img src={cartItem?.image} alt={cartItem?.title} className='rounded-box'/>
				<div className='title-content'>
					<h1 >{cartItem.title}</h1>
					<p >{Math.floor(cartItem.price * 1300).toLocaleString('ko-KR')}원</p>
				</div>
			</div>
			<div>
				<button onClick={hRemoveFromCart} className = 'bold-red-btn'>제거</button>
			</div>
		</div>
	)
}