import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Badge } from "antd";
import "./index.less";
import { connect } from "react-redux";
import { CombinedState, CartState } from "@/typings";

interface Props {
	cart: CartState;
}
function Tabs(props: Props) {
	return (
		<footer>
			<NavLink exact to="/">
			<Icon type="bulb" />
				<span>资料</span>
			</NavLink>
			<NavLink exact to="/search">
			<Icon type="file-search" />
				<span>搜索</span>
			</NavLink>
			<NavLink exact to="/cart">
				<Badge count={props.cart.reduce((prev, next) => prev + next.count, 0)}>
				<Icon type="carry-out" />
					<span>完成</span>
				</Badge>
			</NavLink>
			<NavLink exact to="/profile">
			<Icon type="user" />
				<span>个人中心</span>
			</NavLink>
		</footer>
	);
}

const mapDispatchToState = (state: CombinedState) => ({ cart: state.cart });
export default connect(mapDispatchToState)(Tabs);
